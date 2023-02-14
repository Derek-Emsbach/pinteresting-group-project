from app.models import db, Board, Pin, environment, SCHEMA
from .images_lists import cake_images,camp_images,christmas_images,decor_images,dog_images,food_images,halloween_images,nature_images,plant_images,puppies_images,snow_images,wedding_flower_images,wedding_images, user_images

# Adds a demo board, you can add other boards here if you want

def create_board_with_pins(db, user_id, board_title, board_image, pin_image_list):
    board = Board(userId=user_id, title=board_title, imageUrl=board_image)
    db.session.add(board)

    pin_num = 0
    for pin_image in list(set(pin_image_list)):
        pin_num = pin_num + 1
        pin = Pin(userId=user_id, title=f"{board_title} {pin_num}", save=False, url=None, imageUrl=pin_image)

        board.pins.append(pin)
        db.session.add(pin)

    db.session.commit()


def seed_boards_and_pins():

    create_board_with_pins(
        db, 13, 'Cakes',
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&w=600&q=60',
        cake_images
    )

    create_board_with_pins(
        db, 12, 'Summer Camp',
        'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&w=600&q=60',
        camp_images
    )

    create_board_with_pins(
        db, 1, 'Christmas',
        'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&w=600&q=60',
        christmas_images
    )

    create_board_with_pins(
        db, 1, 'Decor',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&w=600&q=60',
        decor_images
    )

    create_board_with_pins(
        db, 1, 'Dogs I Want',
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&w=600&q=60',
        dog_images
    )

    create_board_with_pins(
        db, 11, 'Food',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&w=600&q=60',
        food_images
    )

    create_board_with_pins(
        db, 10, 'Halloween',
        'https://images.unsplash.com/photo-1633628569245-1a939e025ebb?auto=format&w=600&q=60',
        halloween_images
    )

    create_board_with_pins(
        db, 1, 'Nature',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&w=600&q=60',
        nature_images
    )

    create_board_with_pins(
        db, 9, 'Plants',
        'https://images.unsplash.com/photo-1463554050456-f2ed7d3fec09?auto=format&w=600&q=60',
        plant_images
    )

    create_board_with_pins(
        db, 4, 'Puppies',
        'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?auto=format&w=600&q=60',
        puppies_images
    )

    create_board_with_pins(
        db, 7, 'Snowboarding',
        'https://images.unsplash.com/photo-1611124600582-c9ef0e977585?auto=format&w=600&q=60',
        snow_images
    )

    create_board_with_pins(
        db, 8, 'Wedding Flowers',
        'https://images.unsplash.com/photo-1593470309378-bf460a1c7f10?auto=format&w=600&q=60',
        wedding_flower_images
    )

    create_board_with_pins(
        db, 8, 'Wedding Ideas',
        'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&w=600&q=60',
        wedding_images
    )

    data = []

    demoBoard = Board(userId=1, title='Random',
                         imageUrl='https://m.media-amazon.com/images/I/81QVIs34c0L._AC_UX679_.jpg')
    demoPins = [
        Pin(userId=1, title="demo1", save=False, url="https://www.amazon.com/Erasers-Classroom-Birthday-Supplies-Wonderful/dp/B0B2P1Y211/ref=sr_1_4?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225106&sprefix=random%2Caps%2C110&sr=8-4",
            imageUrl="https://m.media-amazon.com/images/I/81fs-GWce2L._AC_SX679_.jpg"),
        Pin(userId=1, title="demo2", save=False, url="https://www.amazon.com/Jack-Links-Teriyaki-Protein-5-0-625oz/dp/B015SQAVB8/ref=sr_1_13?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225129&sprefix=random%2Caps%2C110&sr=8-13",
            imageUrl="https://m.media-amazon.com/images/I/41gl-9qjJbS._SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=1, title="demo3", save=False, url="https://www.amazon.com/Rechargeable-Dimmable-Portable-Bedroom-Bedside/dp/B08PQNS73H/ref=sr_1_24?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225129&sprefix=random%2Caps%2C110&sr=8-24",
            imageUrl="https://m.media-amazon.com/images/I/51UXG263MVS._AC_SX679_.jpg"),
        Pin(userId=1, title="demo4", save=False, url="https://www.amazon.com/Piscifun-Baitcasting-Baitcaster-Aluminum-Baitcast/dp/B07PRPFBTF/?_encoding=UTF8&pd_rd_w=3kMUa&content-id=amzn1.sym.18be86ac-b16e-400a-b42f-43f216645498&pf_rd_p=18be86ac-b16e-400a-b42f-43f216645498&pf_rd_r=81GT5VWD20G81R1ZFPZ6&pd_rd_wg=iNqYJ&pd_rd_r=0e5f7cdf-383b-4f6d-96a0-88529eeb0aca&ref_=pd_gw_bmx_gp_cc4nxlro", imageUrl="https://m.media-amazon.com/images/I/71jLR8KuCtL._AC_SX466_.jpg"),
        Pin(userId=1, title="demo5", save=False, url="https://www.amazon.com/Michael-Kors-Quartz-Stainless-Casual/dp/B06XJNM54R/ref=sr_1_46?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225129&sprefix=random%2Caps%2C110&sr=8-46",
            imageUrl="https://m.media-amazon.com/images/I/71aq6HsZiKS._AC_UX522_.jpg"),
        Pin(userId=1, title="demo6", save=False, url="https://www.amazon.com/Random-Axolotl-Fidget-Articulated-Decoration/dp/B0BHPY5G9Z/ref=sr_1_48?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225129&sprefix=random%2Caps%2C110&sr=8-48",
            imageUrl="https://m.media-amazon.com/images/I/51+VYoYNcLL._AC_SX300_SY300_.jpg"),
        Pin(userId=1, title="demo7", save=False, url="https://www.amazon.com/Pieces-Polyhedral-Random-Colored-Assortment/dp/B09FYY6J4X/ref=sr_1_54?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225129&sprefix=random%2Caps%2C110&sr=8-54",
            imageUrl="https://m.media-amazon.com/images/I/81QJ34tuTgL._AC_SX466_.jpg"),
        Pin(userId=1, title="demo8", save=False, url="https://www.amazon.com/WORD-TEASERS-Random-Conversation-Starters/dp/B07WTY38H6/ref=sr_1_59?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225129&sprefix=random%2Caps%2C110&sr=8-59",
            imageUrl="https://m.media-amazon.com/images/I/81ObX8a-OQL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=1, title="demo9", save=False, url="https://www.amazon.com/Original-Rowntrees-Randoms-England-Rowntress/dp/B01DU6HAH6/ref=sr_1_55?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225238&sprefix=random%2Caps%2C110&sr=8-55",
            imageUrl="https://m.media-amazon.com/images/I/51z8jIB898L._SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=1, title="demo10", save=False, url="https://www.amazon.com/Accoutrements-12041-Emergency-Underpants/dp/B003DM3MN4/ref=sr_1_56?crid=2FM1Y4YMGVLB4&keywords=random&qid=1676225253&sprefix=random%2Caps%2C110&sr=8-56",
            imageUrl="https://m.media-amazon.com/images/I/81943kgHgHL._AC_SY879_.jpg"),


    ]

    for pin in demoPins:
        demoBoard.pins.append(pin)

    data.append(demoBoard)
    data.extend(demoPins)

    cherryBoard = Board(userId=2, title='Boba',
                         imageUrl='https://m.media-amazon.com/images/I/51AcI6uBEtL._SX300_SY300_QL70_FMwebp_.jpg')
    cherryPins = [
        Pin(userId=2, title="cherry1", save=False, url="https://www.amazon.com/Strawberry-Pearls-Popping-Bursting-Bubble/dp/B01IJB1Z3M/ref=sr_1_2?keywords=boba&qid=1676231158&sr=8-2",
            imageUrl="https://m.media-amazon.com/images/I/41uKZA6ligL._SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=2, title="cherry2", save=False, url="https://www.amazon.com/Black-Tapioca-Pearl-Boba-Pound/dp/B01IE9P1KC/ref=sr_1_2?keywords=boba&qid=1676231176&sr=8-2",
            imageUrl="https://m.media-amazon.com/images/I/51Vc+Rc+1NL.jpg"),
        Pin(userId=2, title="cherry3", save=False, url="https://www.amazon.com/Tapioca-Wufuyuan-FortuneHouse-Stainless-Cleaning/dp/B091Q6JY72/ref=sr_1_3?keywords=boba&qid=1676231176&sr=8-3",
            imageUrl="https://m.media-amazon.com/images/I/81Mrwm4nt6L._AC_SX522_.jpg"),
        Pin(userId=2, title="cherry4", save=False, url="https://www.amazon.com/WAY-Instant-Authentic-Tapioca-Included/dp/B096WHBM1K/ref=sr_1_5?keywords=boba&qid=1676231176&sr=8-5",
            imageUrl="https://m.media-amazon.com/images/I/710XgEjpNbL._SX569_.jpg"),
        Pin(userId=2, title="cherry5", save=False, url="https://www.amazon.com/Passion-Pearls-Popping-Bursting-Tapioca/dp/B09TTXYFRW/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb%3Aamzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&cv_ct_cx=boba&keywords=boba&pd_rd_i=B09TTXYFRW&pd_rd_r=007de0e1-8330-41ef-bb7c-394c253c14b6&pd_rd_w=7DbXU&pd_rd_wg=4nEiR&pf_rd_p=f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&pf_rd_r=T1KY7F3JSW3GF1BW8TGA&qid=1676231176&sr=1-3-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFUQVY1Q1MyVU8yWkQmZW5jcnlwdGVkSWQ9QTA3NDA5NTMxVzJXVUpOWURKRVg0JmVuY3J5cHRlZEFkSWQ9QTAxMjMyMjlZRDJKQkIxVldDUEMmd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl", imageUrl="https://m.media-amazon.com/images/I/91R1-3yQZGL._SX679_.jpg"),
        Pin(userId=2, title="cherry6", save=False, url="https://www.amazon.com/Locca-Premium-Drinks-Tapioca-Jasmine/dp/B08H1VQVJX/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb%3Aamzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&cv_ct_cx=boba&keywords=boba&pd_rd_i=B08H1VQVJX&pd_rd_r=007de0e1-8330-41ef-bb7c-394c253c14b6&pd_rd_w=7DbXU&pd_rd_wg=4nEiR&pf_rd_p=f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&pf_rd_r=T1KY7F3JSW3GF1BW8TGA&qid=1676231176&sr=1-5-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFUQVY1Q1MyVU8yWkQmZW5jcnlwdGVkSWQ9QTA3NDA5NTMxVzJXVUpOWURKRVg0JmVuY3J5cHRlZEFkSWQ9QTAxMjYwNzIxQzFDU1BUT1pYNlImd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl", imageUrl="https://m.media-amazon.com/images/I/41wpLOhiZ2L._SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=2, title="cherry7", save=False, url="https://www.amazon.com/Wufuyuan-Tapioca-Pearl-8-8-Oz/dp/B00PLTPSOI/ref=sxin_24?asc_contentid=amzn1.osa.794df8ee-027e-406b-952e-aeaa777dc88f.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.794df8ee-027e-406b-952e-aeaa777dc88f.ATVPDKIKX0DER.en_US&content-id=amzn1.sym.2501e731-e00e-46aa-97f8-28a8de3ef511%3Aamzn1.sym.2501e731-e00e-46aa-97f8-28a8de3ef511&creativeASIN=B00PLTPSOI&cv_ct_cx=boba&cv_ct_id=amzn1.osa.794df8ee-027e-406b-952e-aeaa777dc88f.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&keywords=boba&linkCode=oas&pd_rd_i=B00PLTPSOI&pd_rd_r=007de0e1-8330-41ef-bb7c-394c253c14b6&pd_rd_w=K4N3W&pd_rd_wg=4nEiR&pf_rd_p=2501e731-e00e-46aa-97f8-28a8de3ef511&pf_rd_r=T1KY7F3JSW3GF1BW8TGA&qid=1676231176&sr=1-4-c26ac7f6-b43f-4741-a772-17cad7536576&tag=momtastic-tca-20", imageUrl="https://m.media-amazon.com/images/I/71dAp6HqmwL._SY679_.jpg"),
        Pin(userId=2, title="cherry8", save=False, url="https://www.amazon.com/Smoothie-Stainless-Reusable-Drinking-Silicone/dp/B0B1MJ41T1/ref=sr_1_14?keywords=boba&qid=1676231176&sr=8-14",
            imageUrl="https://m.media-amazon.com/images/I/716psxxhg0L.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=2, title="cherry9", save=False, url="https://www.amazon.com/Yuki-and-Love-Boba-Mochi/dp/B08TB16RCX/ref=sr_1_16?keywords=boba&qid=1676231176&sr=8-16",
            imageUrl="https://m.media-amazon.com/images/I/71AVLhfKb0L.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=2, title="cherry10", save=False, url="https://www.amazon.com/Angled-Reusable-Smoothie-Straws-Brushes/dp/B0B24V3WL4/ref=sr_1_18?keywords=boba&qid=1676231176&sr=8-18",
            imageUrl="https://m.media-amazon.com/images/I/815MnOmXNBL._AC_SX466_PIbundle-12,TopRight,0,0_SH20_.jpg"),

    ]

    for pin in cherryPins:
        cherryBoard.pins.append(pin)

    data.append(cherryBoard)
    data.extend(cherryPins)

    jimmyBoard = Board(userId=3, title='Games',
                        imageUrl='https://m.media-amazon.com/images/I/81zg1vHpbkL._SX522_.jpg')
    jimmyPins = [
        Pin(userId=3, title="jimmy1", save=False, url="https://www.amazon.com/Call-Duty-Warfare-Cross-Gen-Pre-purchase/dp/B0BGMFJL53/ref=sr_1_1?crid=2G3L68ZVD8OG2&keywords=call+of+duty&qid=1676231487&sprefix=call+of+duty%2Caps%2C125&sr=8-1&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840",
            imageUrl="https://m.media-amazon.com/images/I/81mQ7xi9rOL._AC_SX679_.jpg"),
        Pin(userId=3, title="jimmy2", save=False, url="https://www.amazon.com/Starcraft-II-Battle-Chest-Online/dp/B01N1VDVP6/ref=sr_1_6?crid=1GMDNNYJZELN7&keywords=starcraft&qid=1676231519&sprefix=starcraft%2Caps%2C158&sr=8-6",
            imageUrl="https://m.media-amazon.com/images/I/81jtTi1MIDL._SX522_.jpg"),
        Pin(userId=3, title="jimmy3", save=False, url="https://www.amazon.com/Funko-Pop-Games-Pudge-Cleaver/dp/B07CSN1P3L/ref=sr_1_1?crid=9NQ27FQ77F5E&keywords=dota&qid=1676231538&sprefix=dota%2Caps%2C126&sr=8-1",
            imageUrl="https://m.media-amazon.com/images/I/61o7uSPBWpL._AC_SX679_.jpg"),
        Pin(userId=3, title="jimmy4", save=False, url="https://www.amazon.com/Elden-Ring-Xbox-One/dp/B07T8J27XQ/ref=sr_1_1?crid=3BTWP16ELXY69&keywords=elden+ring&qid=1676231581&sprefix=elden+ring%2Caps%2C118&sr=8-1&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840",
            imageUrl="https://m.media-amazon.com/images/I/81cY7DwfO+S._SY500_.jpg"),
        Pin(userId=3, title="jimmy5", save=False, url="https://www.amazon.com/Pok%C3%A9mon-Lets-Go-Eevee-Nintendo-Switch/dp/B07DJ1SS29/ref=sr_1_13?crid=6X70MFXIJ0UF&keywords=pokemon+go&qid=1676231626&sprefix=pokemon+go%2Caps%2C113&sr=8-13",
            imageUrl="https://m.media-amazon.com/images/I/716xLw0R9+L._SY500_.jpg"),
        Pin(userId=3, title="jimmy6", save=False, url="https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B099VMT8VZ/ref=sr_1_3?crid=18OCC3HT3I56W&keywords=quest+2&qid=1676231652&sprefix=quest+2%2Caps%2C113&sr=8-3&ufe=app_do%3Aamzn1.fos.ac2169a1-b668-44b9-8bd0-5ec63b24bcb5",
            imageUrl="https://m.media-amazon.com/images/I/710yeNqefxL._SX522_.jpg"),
        Pin(userId=3, title="jimmy7", save=False, url="https://www.amazon.com/Valve-Release-Headset-Stations-Controllers/dp/B07VPRVBFF/ref=sr_1_1?keywords=valve+index&qid=1676231678&sprefix=valve%2Caps%2C119&sr=8-1&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/61rt14PIodL.__AC_SY300_SX300_QL70_FMwebp_.jpg"),
        Pin(userId=3, title="jimmy8", save=False, url="https://www.amazon.com/TUBBZ-Destiny-Gunslinger-Collectible-Figurine/dp/B09J5X6JQS/ref=sr_1_6?crid=2PGGSU2PIY8Y6&keywords=destiny+2&qid=1676231698&sprefix=destiny+2%2Caps%2C118&sr=8-6",
            imageUrl="https://m.media-amazon.com/images/I/61Sz2zvfSfL._AC_SX466_.jpg"),
        Pin(userId=3, title="jimmy9", save=False, url="https://www.amazon.com/Bubble-Bobble-Friends-Baron-Nintendo-Switch/dp/B08HDPKQTN/ref=sr_1_1?keywords=bubble+bobble&qid=1676231748&sprefix=bubble+bobb%2Caps%2C116&sr=8-1",
            imageUrl="https://m.media-amazon.com/images/I/81hVcGkaMBL._AC_SX522_.jpg"),
        Pin(userId=3, title="jimmy10", save=False, url="https://www.amazon.com/Nintendo-System-Super-Mario-Renewed-Entertainment/dp/B07KPNVVKH/ref=sxin_24_pa_sp_search_thematic-asin_sspa?content-id=amzn1.sym.139755fc-e653-4f77-9e36-97d145a75e7c%3Aamzn1.sym.139755fc-e653-4f77-9e36-97d145a75e7c&crid=I5LE6P5S19FP&cv_ct_cx=mario&keywords=mario&pd_rd_i=B07KPNVVKH&pd_rd_r=2a3718b2-a307-49b3-8237-de2291ad2816&pd_rd_w=KIPll&pd_rd_wg=rTQkh&pf_rd_p=139755fc-e653-4f77-9e36-97d145a75e7c&pf_rd_r=7CYT9VFEFZDS83NSERY7&qid=1676231772&sprefix=mario%2Caps%2C120&sr=1-3-4a643ae4-6005-4b15-bc31-2c5125e2b25b-spons&psc=1", imageUrl="https://m.media-amazon.com/images/I/710UJzpZN+L._SX522_.jpg"),

    ]

    for pin in jimmyPins:
        jimmyBoard.pins.append(pin)

    data.append(jimmyBoard)
    data.extend(jimmyPins)

    chrisBoard = Board(userId=5, title='Fishing',
                         imageUrl='https://m.media-amazon.com/images/I/81eV6R7IIPL._AC_SX679_.jpg')
    chrisPins = [
        Pin(userId=5, title="chris1", save=False, url="https://www.amazon.com/Okuma-Surf-8K-Spinning-SURF-8K/dp/B07NQLC1LN/?_encoding=UTF8&pd_rd_w=hqNyh&content-id=amzn1.sym.18be86ac-b16e-400a-b42f-43f216645498&pf_rd_p=18be86ac-b16e-400a-b42f-43f216645498&pf_rd_r=FP300YEK2AEC1GR1YF0F&pd_rd_wg=THfvM&pd_rd_r=fbee4f29-4679-426f-99fb-f20458f2971d&ref_=pd_gw_bmx_gp_cc4nxlro", imageUrl="https://m.media-amazon.com/images/I/81eV6R7IIPL._AC_SX679_.jpg"),
        Pin(userId=5, title="chris2", save=False, url="https://www.amazon.com/HDS-7-Live-Transducer-FishReveal-Integration/dp/B07HR13Q9Z/?_encoding=UTF8&pd_rd_w=hqNyh&content-id=amzn1.sym.18be86ac-b16e-400a-b42f-43f216645498&pf_rd_p=18be86ac-b16e-400a-b42f-43f216645498&pf_rd_r=FP300YEK2AEC1GR1YF0F&pd_rd_wg=THfvM&pd_rd_r=fbee4f29-4679-426f-99fb-f20458f2971d&ref_=pd_gw_bmx_gp_cc4nxlro", imageUrl="https://m.media-amazon.com/images/I/81QyrdVMQzL._AC_SX679_.jpg"),
        Pin(userId=5, title="chris3", save=False, url="https://www.amazon.com/KastKing-Sol-Armis-UPF-Boonie/dp/B07PWWN8PM/ref=sr_1_10?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676231915&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-10",
            imageUrl="https://m.media-amazon.com/images/I/71EmtPnZtvL._AC_UX679_.jpg"),
        Pin(userId=5, title="chris4", save=False, url="https://www.amazon.com/PLUSINNO-Including-Crankbaits-Spinnerbaits-Topwater/dp/B08GSDK5YS/ref=sr_1_9?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676231931&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-9",
            imageUrl="https://m.media-amazon.com/images/I/81ad9FiliFL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=5, title="chris5", save=False, url="https://www.amazon.com/TRUSCEND-Swimbaits-Swimming-Freshwater-Saltwater/dp/B07GP1DL4K/ref=sr_1_11?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676231931&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-11",
            imageUrl="https://m.media-amazon.com/images/I/81ju-MJ46NL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=5, title="chris6", save=False, url="https://www.amazon.com/ZACX-Fishing-Gripper-Upgraded-Muti-Function/dp/B07MXBLD23/ref=sr_1_19?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676231931&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-19",
            imageUrl="https://m.media-amazon.com/images/I/71qk-VX7LEL._AC_SX679_.jpg"),
        Pin(userId=5, title="chris7", save=False, url="https://www.amazon.com/Piscifun-Fishing-Spooler-Unwinding-Function/dp/B08HLVDCZW/ref=sr_1_21?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676231931&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-21",
            imageUrl="https://m.media-amazon.com/images/I/61EntAvpGeL._AC_SX679_.jpg"),
        Pin(userId=5, title="chris8", save=False, url="https://www.amazon.com/Allnice-Durable-Canvas-Fishing-Organizer/dp/B01AG0N9K6/ref=sr_1_25?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676231931&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-25",
            imageUrl="https://m.media-amazon.com/images/I/71-JA+kt0nL._AC_SX679_.jpg"),
        Pin(userId=5, title="chris9", save=False, url="https://www.amazon.com/OstWony-High-Carbon-Specifications-Portable-Environments/dp/B08XQQ8K7Q/ref=sr_1_30?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676231999&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-30",
            imageUrl="https://m.media-amazon.com/images/I/71Wz8M+7NGS._AC_SX466_.jpg"),
        Pin(userId=5, title="chris10", save=False, url="https://www.amazon.com/PLUSINNO-Vertical-Fishing-Mounted-Diameter/dp/B09P176CP2/ref=sr_1_38?crid=1GBL33YJ7PV1N&keywords=fishing&qid=1676232016&s=sporting-goods&sprefix=fishing%2Csporting%2C117&sr=1-38",
            imageUrl="https://m.media-amazon.com/images/I/71DXNv9d8KL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),

    ]

    for pin in chrisPins:
        chrisBoard.pins.append(pin)

    data.append(chrisBoard)
    data.extend(chrisPins)

    derekBoard = Board(userId=5, title='Computer Systems',
                      imageUrl='https://m.media-amazon.com/images/I/81OIn7984vS._AC_SX679_.jpg')
    derekPins = [
        Pin(userId=6, title="derek1", save=False, url="https://www.amazon.com/Dell-OptiPlex-3050-Computer-Monitors/dp/B096GWPB6L/ref=sr_1_3?keywords=computer+system&qid=1676232186&sr=8-3",
            imageUrl="https://m.media-amazon.com/images/I/81OIn7984vS._AC_SX679_.jpg"),
        Pin(userId=6, title="derek2", save=False, url="https://www.amazon.com/Thermaltake-Liquid-Cooled-ToughRAM-Computer-S3WT-B550-G36-LCS/dp/B09FYNM2GW/ref=sr_1_4?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232210&sprefix=water+cooled+pc%2Caps%2C114&sr=8-4&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/61cXu9yGldL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=6, title="derek3", save=False, url="https://www.amazon.com/Thermaltake-Liquid-Cooled-ToughRAM-Computer-AHB2-B550-A36-LCS/dp/B09FYNSYBX/ref=sr_1_9?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232231&sprefix=water+cooled+pc%2Caps%2C114&sr=8-9&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/91jZtQCewFL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=6, title="derek4", save=False, url="https://www.amazon.com/Thermaltake-ToughRam-3000Mhz-GeForce-P3BK-B450-S36-LCS/dp/B08WYV48ZQ/ref=sr_1_13?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232231&sprefix=water+cooled+pc%2Caps%2C114&sr=8-13&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/81J6OIX+RBL._AC_SY300_SX300_.jpg"),
        Pin(userId=6, title="derek5", save=False, url="https://www.amazon.com/Thermaltake-Liquid-Cooled-ToughRAM-Computer-TW1B-B550-R38-LCS/dp/B093K2P2HQ/ref=sr_1_16?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232231&sprefix=water+cooled+pc%2Caps%2C114&sr=8-16&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/816nxSZz+WS._AC_SY300_SX300_.jpg"),
        Pin(userId=6, title="derek6", save=False, url="https://www.amazon.com/Thermaltake-Liquid-Cooled-i5-11600K-ToughRAM-P3WT-Z590-A36-LCS/dp/B09FYMPW34/ref=sr_1_19?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232231&sprefix=water+cooled+pc%2Caps%2C114&sr=8-19&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/91gHKdBAydL._AC_SX679_.jpg"),
        Pin(userId=6, title="derek7", save=False, url="https://www.amazon.com/CLX-Set-VR-Ready-Gaming-Desktop/dp/B0BHTY49G2/ref=sr_1_19?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232324&sprefix=water+cooled+pc%2Caps%2C114&sr=8-19&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/71sgTE7o2oL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=6, title="derek8", save=False, url="https://www.amazon.com/Skytech-Prism-II-Gaming-Desktop/dp/B09699NMFK/ref=sr_1_26?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232337&sprefix=water+cooled+pc%2Caps%2C114&sr=8-26&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/91g0K9gzxDS.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=6, title="derek9", save=False, url="https://www.amazon.com/CORSAIR-ONE-a200-Compact-Workstation-Class/dp/B09BBLWX6Y/ref=sr_1_29?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232337&sprefix=water+cooled+pc%2Caps%2C114&sr=8-29&ufe=app_do%3Aamzn1.fos.4dd97f68-284f-40f5-a6f1-1e5b3de13370",
            imageUrl="https://m.media-amazon.com/images/I/71WkZn95jlL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=6, title="derek10", save=False, url="https://www.amazon.com/CYBERPOWERPC-Supreme-Liquid-GeForce-SLC8260A6/dp/B09GWBKXRH/ref=sr_1_36?crid=NUT7ERTVGE25&keywords=water+cooled+pc&qid=1676232337&sprefix=water+cooled+pc%2Caps%2C114&sr=8-36",
            imageUrl="https://m.media-amazon.com/images/I/818SNa1ruZL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),

    ]

    for pin in derekPins:
        derekBoard.pins.append(pin)

    data.append(derekBoard)
    data.extend(derekPins)

    amansBoard = Board(userId=6, title='Doggie Stuff',
                           imageUrl='https://m.media-amazon.com/images/I/51QOhMS+XyL._AC_UX569_.jpg')
    amansPins = [
        Pin(userId=4, title="aman1", save=False, url="https://www.amazon.com/vavalad-Retriever-Costume-Jumpsuit-Loungewear/dp/B09PTVTJVR/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb%3Aamzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&crid=NWKJMV1MLERA&cv_ct_cx=golden+retriever&keywords=golden+retriever&pd_rd_i=B09PTVTJVR&pd_rd_r=d2ee51ad-94fd-478a-952c-74d312cd176c&pd_rd_w=o73wg&pd_rd_wg=rngmf&pf_rd_p=f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&pf_rd_r=DT6T1XG46M763CQCNR5S&qid=1676232473&sprefix=golden+re%2Caps%2C115&sr=1-5-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyR04xMFdURFhUUUM0JmVuY3J5cHRlZElkPUEwMjA5NDYxM0Y5MDBIQjdXQzdEMyZlbmNyeXB0ZWRBZElkPUEwNjE1NjA5TDE3MVZDUEhDR1NaJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==", imageUrl="https://m.media-amazon.com/images/I/51QOhMS+XyL._AC_UX569_.jpg"),
        Pin(userId=4, title="aman2", save=False, url="https://www.amazon.com/LotFancy-Stuffed-Animal-Golden-Retriever/dp/B079B944C1/ref=sr_1_9?crid=NWKJMV1MLERA&keywords=golden+retriever&qid=1676232473&sprefix=golden+re%2Caps%2C115&sr=8-9",
            imageUrl="https://m.media-amazon.com/images/I/61Sr2dbh-OL.__AC_SX300_SY300_QL70_FMwebp_.jpg"),
        Pin(userId=4, title="aman3", save=False, url="https://www.amazon.com/Aggressive-Chewers-RANTOJOY-Durable-Indestructible/dp/B0983Z8NDJ/ref=sxin_25_trfobq2a_3_B0983Z8NDJ?content-id=amzn1.sym.d87bdde9-97f6-47ac-b339-55167deba1dc%3Aamzn1.sym.d87bdde9-97f6-47ac-b339-55167deba1dc&crid=NWKJMV1MLERA&cv_ct_cx=golden+retriever&keywords=golden+retriever&pd_rd_i=B0983Z8NDJ&pd_rd_r=d2ee51ad-94fd-478a-952c-74d312cd176c&pd_rd_w=fzJAw&pd_rd_wg=rngmf&pf_rd_p=d87bdde9-97f6-47ac-b339-55167deba1dc&pf_rd_r=DT6T1XG46M763CQCNR5S&qid=1676232473&sprefix=golden+re%2Caps%2C115&sr=1-4-c944532c-3909-4a2a-84a2-570d2ee3cd13", imageUrl="https://m.media-amazon.com/images/I/81R+9k+ZijL._AC_SX466_.jpg"),
        Pin(userId=4, title="aman4", save=False, url="https://www.amazon.com/Bwogue-Restraint-Adjustable-Restraints-Seatbelts/dp/B078G6MKTN/ref=sr_1_5?crid=20OKDNU3PJAUK&keywords=cute+dog+stuff&qid=1676232534&sprefix=cute+dog+stuff%2Caps%2C110&sr=8-5",
            imageUrl="https://m.media-amazon.com/images/I/714M4n5xTWL._AC_SX466_.jpg"),
        Pin(userId=4, title="aman5", save=False, url="https://www.amazon.com/MewaJump-Aggressive-Training-Cleaning-Interactive/dp/B088D3GZSV/ref=sxin_24_ac_d_bv?ac_md=0-0-QnVkZ2V0IFBpY2s%3D-ac_d_bv_bv_bv&content-id=amzn1.sym.8f2bf95d-b9c2-4e6d-96a9-5fdf77a1951d%3Aamzn1.sym.8f2bf95d-b9c2-4e6d-96a9-5fdf77a1951d&crid=20OKDNU3PJAUK&cv_ct_cx=cute+dog+stuff&keywords=cute+dog+stuff&pd_rd_i=B088D3GZSV&pd_rd_r=ec8af3cd-e062-413c-ab16-66fa0881891f&pd_rd_w=DrAKk&pd_rd_wg=hGvWf&pf_rd_p=8f2bf95d-b9c2-4e6d-96a9-5fdf77a1951d&pf_rd_r=HJ8CGMS321AVSEAW2Q3C&qid=1676232549&sprefix=cute+dog+stuff%2Caps%2C110&sr=1-1-270ce31b-afa8-499f-878b-3bb461a9a5a6", imageUrl="https://m.media-amazon.com/images/I/61sIr-iTVNL._AC_SX466_.jpg"),
        Pin(userId=4, title="aman6", save=False, url="https://www.amazon.com/Teething-Puppies-Squeaky-Cleaning-Protect/dp/B09SHZ791K/ref=sr_1_14?crid=20OKDNU3PJAUK&keywords=cute+dog+stuff&qid=1676232549&sprefix=cute+dog+stuff%2Caps%2C110&sr=8-14",
            imageUrl="https://m.media-amazon.com/images/I/71kvYg+Ln0L._AC_SX466_.jpg"),
        Pin(userId=4, title="aman7", save=False, url="https://www.amazon.com/Costume-Gimilife-Pajamas-Cartoon-Halloween/dp/B08FYQWY5P/ref=sr_1_17?crid=20OKDNU3PJAUK&keywords=cute+dog+stuff&qid=1676232549&sprefix=cute+dog+stuff%2Caps%2C110&sr=8-17",
            imageUrl="https://m.media-amazon.com/images/I/41pYv9GZFoL.__AC_SY300_SX300_QL70_FMwebp_.jpg"),
        Pin(userId=4, title="aman8", save=False, url="https://www.amazon.com/SiRee-Portable-Dispenser-Drinking-Antibacterial/dp/B07CG51J7C/ref=sr_1_33?crid=20OKDNU3PJAUK&keywords=cute+dog+stuff&qid=1676232549&sprefix=cute+dog+stuff%2Caps%2C110&sr=8-33",
            imageUrl="https://m.media-amazon.com/images/I/81x0BR1AcPL._AC_SX466_.jpg"),
        Pin(userId=4, title="aman9", save=False, url="https://www.amazon.com/Portable-Dispenser-Container-Multifunctional-Drinking/dp/B0B7GP4WM8/ref=sr_1_40?crid=20OKDNU3PJAUK&keywords=cute+dog+stuff&qid=1676232549&sprefix=cute+dog+stuff%2Caps%2C110&sr=8-40",
            imageUrl="https://m.media-amazon.com/images/I/619MrMjvT5L._AC_SX466_.jpg"),
        Pin(userId=4, title="aman10", save=False, url="https://www.amazon.com/Denim-Fabric-Adjustable-Fashion-Baseball/dp/B07Q1HKP4F/ref=sr_1_41?crid=20OKDNU3PJAUK&keywords=cute+dog+stuff&qid=1676232549&sprefix=cute+dog+stuff%2Caps%2C110&sr=8-41",
            imageUrl="https://m.media-amazon.com/images/I/71PDRUZv9wL._AC_UX679_.jpg"),

    ]

    for pin in amansPins:
        amansBoard.pins.append(pin)

    data.append(amansBoard)
    data.extend(amansPins)

    db.session.add_all(data)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the boards table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_boards_and_pins():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.boards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pinnings CASCADE")
        db.session.execute("DELETE FROM pins CASCADE")
        db.session.execute("DELETE FROM boards CASCADE")

    db.session.commit()
