from app.models import db, Pinning, environment, SCHEMA


# Adds a demo pinning, you can add other pinnings here if you want
def seed_pinnings():
    pinningsData =[
    Pinning(boardId=1,pinId=1),
    Pinning(boardId=2,pinId=2),
    Pinning(boardId=3,pinId=3)
    ]
    db.session.add_all(pinningsData)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the pinnings table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_pinnings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pinnings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pinnings")

    db.session.commit()
