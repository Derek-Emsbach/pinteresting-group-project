from app.models import db, Board, environment, SCHEMA


# Adds a demo board, you can add other boards here if you want
def seed_boards():
    board1 = Board(userId=1, title='animals', imageUrl='https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg')
    board2 = Board(userId=1, title='places', imageUrl='https://i.insider.com/5d1270089c51010bb17c0536?width=1200&format=jpeg')
    board3 = Board(userId=1, title='things', imageUrl='https://www.gannett-cdn.com/presto/2021/11/12/USAT/d6132cad-ab80-4cfa-b1d2-21b83048f5f6-Popular-Hero.png?width=660&height=372&fit=crop&format=pjpg&auto=webp')

    db.session.add(board1)
    db.session.add(board2)
    db.session.add(board3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the boards table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_boards():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.boards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM boards")

    db.session.commit()
