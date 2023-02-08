from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    userData = [
        User(firstName='Demo', lastName = 'User',username="Demo", email="demo@aa.io", password="password"),
        User(firstName = 'Cherry',lastName ='Huang',username="Cherry",email="Cherry@aa.io", password="password"),
        User(firstName = 'Jimmy',lastName ='Pham',username="Jimmy", email="Jimmy@aa.io", password="password"),
        User(firstName = 'Aman',lastName ='Aman',username="Aman", email="Aman@aa.io", password="password"),
        User(firstName = 'Chris',lastName ='Chan',username="Chris", email="Chris@aa.io", password="password"),
        User(firstName = 'Derek',lastName ='Emsbach',username="Derek", email="Derek@aa.io", password="password")
    ]
    db.session.bulk_save_objects(userData)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
