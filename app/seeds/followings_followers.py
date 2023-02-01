from app.models import db, Following_Follower, environment, SCHEMA


# Adds a demo following_follower, you can add other followings_followers here if you want
def seed_followings_followers():
    following_follower1 = Following_Follower(followedUserId=1,followerUserId=1)
    following_follower2 = Following_Follower(followedUserId=2,followerUserId=2)
    following_follower3 = Following_Follower(followedUserId=3,followerUserId=3)

    db.session.add(following_follower1)
    db.session.add(following_follower2)
    db.session.add(following_follower3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the followings_followers table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_followings_followers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.followings_followers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM followings_followers")

    db.session.commit()
