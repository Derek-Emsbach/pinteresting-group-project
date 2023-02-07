from app.models import db, Board, Pin, environment, SCHEMA
import random

# Adds a demo board, you can add other boards here if you want
def seed_boards():
    names = ['animals', 'places', 'things']
    image_sizes = [
        [260, 300],
        [300, 220],
        [560, 480],
        [330, 420]
    ]

    for i in range(len(names)):
        n1 = (i + 4) * 100
        board_name = names[i]

        x, y = random.choice(image_sizes)
        board_image_url = f"https://picsum.photos/id/{n1}/{x}/{y}"

        board = Board(userId=1, title=board_name, imageUrl=board_image_url)

        db.session.add(board)

        for j in range(10):
            n2 = n1 + ((j + 1) * 3)
            pin_name = f"{board_name}_{j}"

            x, y = random.choice(image_sizes)
            pin_image_url = f"https://picsum.photos/id/{n2}/{x}/{y}"

            pin = Pin(userId=1, title=pin_name, save=True, url='pinUrl', imageUrl=pin_image_url)
            board.pins.append(pin)

            db.session.add(pin)

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
