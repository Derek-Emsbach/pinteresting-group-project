from app.models import db, Board, environment, SCHEMA


# Adds a demo board, you can add other boards here if you want
def seed_boards():
    boardData = [
    Board(userId=4, title='Cute Animals', imageUrl='https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'),
    Board(userId=6, title='Gaming Computers', imageUrl='https://i.ytimg.com/vi/wKoHS2aKSUI/maxresdefault.jpg'),
    Board(userId=1, title='Pokemon', imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png'),
    Board(userId=5, title='Cars', imageUrl='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg'),
    Board(userId=3, title='Games', imageUrl='https://media.kasperskydaily.com/wp-content/uploads/sites/85/2014/04/20122626/online-gamer-threats-featured.jpg'),
    Board(userId=2, title='Fashion', imageUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lisa-adams-closet-designer-1561745904.jpg')]

    db.session.bulk_save_objects(boardData)
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
