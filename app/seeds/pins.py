from app.models import db, Pin, environment, SCHEMA


# Adds a demo pin, you can add other pins here if you want
def seed_pins():
    # these pins have no pinning data (they are not pinned to a board)
    pin1 = Pin(userId=1,title='animals',save=True,url='pinUrl',imageUrl='https://picsum.photos/id/116/200/300')
    pin2 = Pin(userId=1,title='places',save=False,url='pinUrl',imageUrl='https://picsum.photos/id/117/200/300')
    pin3 = Pin(userId=1,title='things',save=False,url='pinUrl',imageUrl='https://picsum.photos/id/118/200/300')

    db.session.add(pin1)
    db.session.add(pin2)
    db.session.add(pin3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the pins table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_pins():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pins")

    db.session.commit()
