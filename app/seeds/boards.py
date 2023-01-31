from app.models import db, Board, environment, SCHEMA


# Adds a demo board, you can add other boards here if you want
def seed_boards():
    board1 = Board(userId=1, title='animals', imageUrl='boardImageUrl')
    board2 = Board(userId=1, title='places', imageUrl='boardImageUrl')
    board3 = Board(userId=1, title='things', imageUrl='boardImageUrl')

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
