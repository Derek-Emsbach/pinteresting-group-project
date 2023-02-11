from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    userData = [
        User(firstName='Demo', lastName = 'User',username="Demo", image='https://cdn-icons-png.flaticon.com/512/9591/9591054.png',email="demo@aa.io", password="password"),
        User(firstName = 'Cherry',lastName ='Huang',username="Cherry",image='https://cdn-icons-png.flaticon.com/512/9590/9590989.png',email="Cherry@aa.io", password="password"),
        User(firstName = 'Jimmy',lastName ='Pham',username="Jimmy", image='https://cdn-icons-png.flaticon.com/512/9566/9566655.png',email="Jimmy@aa.io", password="password"),
        User(firstName = 'Aman',lastName ='Aman',username="Aman", image='https://cdn-icons-png.flaticon.com/512/9583/9583021.png',email="Aman@aa.io", password="password"),
        User(firstName = 'Chris',lastName ='Chan',username="Chris", image='https://cdn-icons-png.flaticon.com/512/9477/9477191.png',email="Chris@aa.io", password="password"),
        User(firstName = 'Derek',lastName ='Emsbach',username="Derek", image='https://cdn-icons-png.flaticon.com/512/9477/9477279.png',email="Derek@aa.io", password="password")
    ]
    db.session.add_all(userData)
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
