from app.models import db, User, environment, SCHEMA
from .images_lists import user_images

# Adds a demo user, you can add other users here if you want
def seed_users():
    userData = [
        User(firstName='Demo', lastName = 'User',username="Demo", image='https://cdn-icons-png.flaticon.com/512/9591/9591054.png',email="demo@aa.io", password="password"),
        User(firstName = 'Cherry',lastName ='Huang',username="Cherry",image='https://cdn-icons-png.flaticon.com/512/9590/9590989.png',email="cherry@aa.io", password="password"),
        User(firstName = 'Jimmy',lastName ='Pham',username="Jimmy", image='https://cdn-icons-png.flaticon.com/512/9566/9566655.png',email="jimmy@aa.io", password="password"),
        User(firstName = 'Aman',lastName ='Aman',username="Aman", image='https://cdn-icons-png.flaticon.com/512/9583/9583021.png',email="aman@aa.io", password="password"),
        User(firstName = 'Chris',lastName ='Chan',username="Chris", image='https://cdn-icons-png.flaticon.com/512/9477/9477191.png',email="chris@aa.io", password="password"),
        User(firstName = 'Derek',lastName ='Emsbach',username="Derek", image='https://cdn-icons-png.flaticon.com/512/9477/9477279.png',email="derek@aa.io", password="password")
    ]

    db.session.add_all(userData)
    db.session.commit()

    user_num = 0
    for user_image in user_images:
        user_num = user_num + 1
        user = User(firstName=f"First {user_num}", lastName=f"Last {user_num}", username=f"Fake User {user_num}", image=user_image, email=f"user-{user_num}@fake.io", password="password")

        db.session.add(user)

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
        db.session.execute("DELETE FROM followers CASCADE")
        db.session.execute("DELETE FROM users CASCADE")

    db.session.commit()
