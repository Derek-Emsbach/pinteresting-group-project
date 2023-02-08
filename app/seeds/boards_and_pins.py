from app.models import db, Board, Pin, environment, SCHEMA

# Adds a demo board, you can add other boards here if you want
def seed_boards_and_pins():
    data = []

    pokemonBoard = Board(userId=1, title='Pokemon', imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png')
    pokemonPins = [
    Pin(userId=1,title="demo2",save=False,url="https://www.amazon.com/BRIGHTWORLD-Control-Dimmable-Rechargeable-Birthday/dp/B07PY7GLKV/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb%3Aamzn1.sym.f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&crid=OSLD4WRSLHJL&cv_ct_cx=glass+moon+globe&keywords=glass+moon+globe&pd_rd_i=B07PY7GLKV&pd_rd_r=d1e5f8ae-8516-4269-8057-c2b664fc1274&pd_rd_w=Y58wb&pd_rd_wg=qCGWi&pf_rd_p=f0c5ad8f-c1b9-48f0-8868-482b84b2d5eb&pf_rd_r=Q5B8HAVKWK6PP65KCMB1&qid=1675751996&sprefix=glass+moon+globe%2Caps%2C84&sr=1-1-a73d1c8c-2fd2-4f19-aa41-2df022bcb241-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRzY1Tk9USEU5TjdZJmVuY3J5cHRlZElkPUEwNDY2OTQ0TFhERVpNSUo4UFJZJmVuY3J5cHRlZEFkSWQ9QTA3NjY4MzgxSjY3UkEyNjNIVTQ2JndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",imageUrl="https://m.media-amazon.com/images/I/71GETtCC-fL.__AC_SY445_SX342_QL70_FMwebp_.jpg"),
Pin(userId=1,title="demo3",save=False,url="https://www.amazon.com/Star-Wars-Remote-Control-Droid/dp/B09SQB4CYX/ref=sr_1_2?keywords=star+wars+bb8&qid=1675751851&sr=8-2",imageUrl="https://1.bp.blogspot.com/-jLBhcuYpLxI/VpeW1KKLd2I/AAAAAAAAAEA/XZfCHaz2YAQ/s1600/sphero1.png"),
Pin(userId=1,title="demo4",save=False,url="https://www.amazon.com/Vintage-Chromatic-Adorable-Collections-Project/dp/B07H8GZ38Z/ref=sr_1_2?crid=KQBXH1LYI5A9&keywords=troll+dolls&qid=1675751917&sprefix=troll+dolls%2Caps%2C93&sr=8-2",imageUrl="https://creativebeacon.com/wp-content/uploads/2012/11/creature-cool-stuff-for-designers.jpg"),
Pin(userId=1,title="demo5",save=False,url="https://www.amazon.com/dp/B0B2K17LXZ?pd_rd_i=B0B2K17LXZ&pf_rd_p=b000e0a0-9e93-480f-bf78-a83c8136dfcb&pf_rd_r=D2GE9FF0MTN7KE50KDVA&pd_rd_wg=ucRIw&pd_rd_w=V7F7d&pd_rd_r=fc9f0325-9341-4e02-adaf-6a93512db5a1",imageUrl="https://i.ytimg.com/vi/gVpHckybWkQ/maxresdefault.jpg"),
Pin(userId=1,title="demo6",save=False,url="https://www.amazon.com/Toddler-Groot-Cable-Controller-Holder/dp/B087547M9F/ref=sr_1_2?crid=ZDUQZ2TUACE2&keywords=groot+phone+holder&qid=1675752076&s=electronics&sprefix=grute+phone+holde%2Celectronics%2C88&sr=1-2",imageUrl="https://cdn.thecoolist.com/wp-content/uploads/2021/12/Nerdy-Christmas-Gifts-Toddler-Groot-Device-Holder.jpg"),
Pin(userId=1,title="demo7",save=False,url="https://www.amazon.com/VOHO-Clear-Tealight-12-Holders/dp/B0B1MMDJ38/ref=sr_1_2?crid=14FCU98UP01U9&keywords=glass+light+candle&qid=1675752115&sprefix=glass+light+candle%2Caps%2C96&sr=8-2",imageUrl="https://www.coolantarctica.com/Antarctica%20fact%20file/ice-light1.jpg"),
Pin(userId=1,title="demo8",save=False,url="https://www.businessinsider.com/coolest-things-in-space-2018-11",imageUrl="https://i.insider.com/5be473950d7c676fb95cc4ca?width=750&format=jpeg"),
Pin(userId=1,title="demo9",save=False,url="https://www.amazon.com/Kidult-Design-Ltd-Lamp-Sounds/dp/B07NGQKD5T/ref=sr_1_8?crid=Z4B29XTFDXW5&keywords=pacman+light&qid=1675752212&sprefix=pacman+light%2Caps%2C112&sr=8-8",imageUrl="https://styles.redditmedia.com/t5_3iuzh/styles/communityIcon_hceklnihybt51.jpg"),
Pin(userId=1,title="demo10",save=False,url="https://www.amazon.com/Beast-Kingdom-Avengers-Endgame-Multicolor/dp/B09D5WJ8Y9/ref=sr_1_3?crid=5FCMSZESDVS2&keywords=thor+egg&qid=1675752254&sprefix=thor+egg%2Caps%2C95&sr=8-3",imageUrl="https://m.media-amazon.com/images/I/61HBsioY7BL._AC_SL1462_.jpg"),
Pin(userId=1,title="demo1",save=False,url="https://www.amazon.com/VSATEN-Dinosaur-Changing-Silicone-Rechargeable/dp/B08D9NWV23/ref=sxin_25_trfobq2a_2_B08D9NWV23?content-id=amzn1.sym.d87bdde9-97f6-47ac-b339-55167deba1dc%3Aamzn1.sym.d87bdde9-97f6-47ac-b339-55167deba1dc&crid=FXWPV2P0BRXV&cv_ct_cx=cool+things&keywords=cool+things&pd_rd_i=B08D9NWV23&pd_rd_r=c9308e9e-a1c5-46a2-852f-748fa64fda3a&pd_rd_w=hYvqf&pd_rd_wg=wLOM4&pf_rd_p=d87bdde9-97f6-47ac-b339-55167deba1dc&pf_rd_r=20Z3Z2X22GB6J5F3P4NH&qid=1675752303&sprefix=cool+thing%2Caps%2C98&sr=1-3-c944532c-3909-4a2a-84a2-570d2ee3cd13",imageUrl="https://m.media-amazon.com/images/I/61et25jE9tL._AC_SL1500_.jpg"),
    ]

    for pin in pokemonPins:
        pokemonBoard.pins.append(pin)

    data.append(pokemonBoard)
    data.extend(pokemonPins)

    fashionBoard = Board(userId=2, title='Fashion', imageUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lisa-adams-closet-designer-1561745904.jpg')
    fashionPins = [
            Pin(userId=2,title="cherry1",save=False,url="pinUrl",imageUrl="https://www.rosewe.com/images/202209/source_img/315093_P_1664502950659.jpg"),
Pin(userId=2,title="cherry2",save=False,url="pinUrl",imageUrl="https://www.lulus.com/images/product/xlarge/7878381_1620796.jpg"),
Pin(userId=2,title="cherry3",save=False,url="pinUrl",imageUrl="https://cdn.shopify.com/s/files/1/2322/9537/products/080222-Sofia-2988.jpg"),
Pin(userId=2,title="cherry4",save=False,url="pinUrl",imageUrl="https://www.lulus.com/images/product/xlarge/8112501_1649856.jpg"),
Pin(userId=2,title="cherry5",save=False,url="pinUrl",imageUrl="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/284953/1.jpg"),
Pin(userId=2,title="cherry6",save=False,url="pinUrl",imageUrl="https://static.fibre2fashion.com//articleresources/images/87/8609/fashion%20women-small_Small.jpg"),
Pin(userId=2,title="cherry7",save=False,url="pinUrl",imageUrl="https://fayth.com/img/submobile_july2020.jpg"),
Pin(userId=2,title="cherry8",save=False,url="pinUrl",imageUrl="https://www.maurices.com/assets/images/quickview-herofpo.jpg"),
Pin(userId=2,title="cherry9",save=False,url="pinUrl",imageUrl="https://www.herstylecode.com/2021/05/how-to-style-cargo-pants-best-new-style-guide-for-women_herstylecode.jpg"),
Pin(userId=2,title="cherry10",save=False,url="pinUrl",imageUrl="https://www.lulus.com/images/product/xlarge/5048791_606432.jpg"),

    ]

    for pin in fashionPins:
        fashionBoard.pins.append(pin)

    data.append(fashionBoard)
    data.extend(fashionPins)

    gamingBoard = Board(userId=3, title='Games', imageUrl='https://media.kasperskydaily.com/wp-content/uploads/sites/85/2014/04/20122626/online-gamer-threats-featured.jpg')
    gamingPins = [
    Pin(userId=3,title="jimmy1",save=False,url="pinUrl",imageUrl="https://c.files.bbci.co.uk/E909/production/_112375695_crucible976.jpg"),
Pin(userId=3,title="jimmy2",save=False,url="pinUrl",imageUrl="https://www.gamingscan.com/wp-content/uploads/2020/10/Call-of-Duty-Game-Order.jpg"),
Pin(userId=3,title="jimmy3",save=False,url="pinUrl",imageUrl="https://assets1.ignimgs.com/2018/03/06/fortnite---button-1520296499714.jpg"),
Pin(userId=3,title="jimmy4",save=False,url="pinUrl",imageUrl="https://static.starcraft2.com/dist/images/global/fb-share.jpg"),
Pin(userId=3,title="jimmy5",save=False,url="pinUrl",imageUrl="https://leekduck.com/assets/img/events/pokemon-go-tour-2023-hoenn-las-vegas-updated.jpg"),
Pin(userId=3,title="jimmy6",save=False,url="pinUrl",imageUrl="https://www.gamespot.com/a/uploads/original/1601/16018044/4072257-seasonoftheseraph%281%29.jpg"),
Pin(userId=3,title="jimmy7",save=False,url="pinUrl",imageUrl="https://www.digitaltrends.com/wp-content/uploads/2022/02/elden-ring-praising-sun.jpg"),
Pin(userId=3,title="jimmy8",save=False,url="pinUrl",imageUrl="https://s.yimg.com/uu/api/res/1.2/dEzGhndCHaLCnUMD_zBcxw--~B/aD0xMTU4O3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https:/media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-01/cdcf03a0-4e92-11eb-afdf-ffae59fc8055.cf.jpg"),
Pin(userId=3,title="jimmy9",save=False,url="pinUrl",imageUrl="https://www.pcinvasion.com/wp-content/uploads/2022/08/overwatch-2-premium.jpg"),
Pin(userId=3,title="jimmy10",save=False,url="pinUrl",imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202211/1900/wAVNdCzihoMYFtrFNju4Rzdj.jpg"),
    ]

    for pin in gamingPins:
        gamingBoard.pins.append(pin)

    data.append(gamingBoard)
    data.extend(gamingPins)

    animalsBoard = Board(userId=4, title='Cute Animals', imageUrl='https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg')
    animalPins = [
    Pin(userId=4,title="aman1",save=False,url="pinUrl",imageUrl="https://www.rd.com/wp-content/uploads/2020/11/GettyImages-899747778-e1606165481516.jpg"),
Pin(userId=4,title="aman2",save=False,url="pinUrl",imageUrl="http://static.demilked.com/wp-content/uploads/2015/12/funny-animal-pictures-comedy-wildlife-photography-awards-paul-joynson-hicks-fb.png"),
Pin(userId=4,title="aman3",save=False,url="pinUrl",imageUrl="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/comedy-wildlife-awards-squirel-stop.jpg"),
Pin(userId=4,title="aman4",save=False,url="pinUrl",imageUrl="https://www.gannett-cdn.com/presto/2022/10/24/USAT/6253d26d-8894-4a38-87ee-6c2f37b1c0d2-7._Miroslav-Srb_Hello-everyone_00001567.jpg"),
Pin(userId=4,title="aman5",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/originals/7f/64/3f/7f643f0db514d7971349c416e29e42a8.jpg"),
Pin(userId=4,title="aman6",save=False,url="pinUrl",imageUrl="https://images.ctfassets.net/f60q1anpxzid/gQDJJFBOzTtvAcT8qUax3/5d0be6dd1c41391fb7683ad2e54185f6/Little_Things_featured_image_puppy.jpg"),
Pin(userId=4,title="aman7",save=False,url="pinUrl",imageUrl="https://bestlifeonline.com/wp-content/uploads/sites/3/2018/04/Animal-jokes-funny-sheep.jpg"),
Pin(userId=4,title="aman8",save=False,url="pinUrl",imageUrl="https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-45.jpg"),
Pin(userId=4,title="aman9",save=False,url="pinUrl",imageUrl="https://www.popsci.com/uploads/2021/09/03/otters-comedy-animal-awards.jpg"),
Pin(userId=4,title="aman10",save=False,url="pinUrl",imageUrl="https://www.creativeboom.com/uploads/articles/db/dbc2cfcdb1abc43662a3806a790ab34935b1a0c0_810.jpg"),
    ]

    for pin in animalPins:
        animalsBoard.pins.append(pin)

    data.append(animalsBoard)
    data.extend(animalPins)

    carsBoard = Board(userId=5, title='Cars', imageUrl='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg')
    carPins = [
    Pin(userId=5,title="chris1",save=False,url="pinUrl",imageUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2020/09/28161922/Tesla-Model-S-Plaid.jpg"),
Pin(userId=5,title="chris2",save=False,url="pinUrl",imageUrl="https://cdn.motor1.com/images/mgl/JlgjM/s3/rimac-nevera.jpg"),
Pin(userId=5,title="chris3",save=False,url="pinUrl",imageUrl="https://blog.way.com/wp-content/uploads/2022/11/Nissan-Skyline-GT-R-R34.jpg"),
Pin(userId=5,title="chris4",save=False,url="pinUrl",imageUrl="https://image.cnbcfm.com/api/v1/image/105940475-1559232349684190164-car-ferrari-sf90-stradale.jpg"),
Pin(userId=5,title="chris5",save=False,url="pinUrl",imageUrl="https://www.topgear.com/sites/default/files/cars-car/carousel/2019/12/tg_-_datsun_240z_-_pre_electrification_-_039.jpg"),
Pin(userId=5,title="chris6",save=False,url="pinUrl",imageUrl="https://hips.hearstapps.com/hmg-prod/images/2022-tesla-cyber-truck-mmp-1-1579127142.jpg"),
Pin(userId=5,title="chris7",save=False,url="pinUrl",imageUrl="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg"),
Pin(userId=5,title="chris8",save=False,url="pinUrl",imageUrl="https://robbreport.com/wp-content/uploads/2021/07/1-15.jpg"),
Pin(userId=5,title="chris9",save=False,url="pinUrl",imageUrl="https://imageio.forbes.com/specials-images/imageserve/5f02b2e299f5170006fad6fe/Aston-Martin-DB5-Continuation-car/960x0.jpg?format=jpg"),
Pin(userId=5,title="chris10",save=False,url="pinUrl",imageUrl="https://pictures.dealer.com/a/astonmartinchicago/0572/64029d20921d904a6eacdc551c54fc1ex.jpg?impolicy=downsize&w=568"),
    ]

    for pin in carPins:
        carsBoard.pins.append(pin)

    data.append(carsBoard)
    data.extend(carPins)

    computersBoard = Board(userId=6, title='Gaming Computers', imageUrl='https://i.ytimg.com/vi/wKoHS2aKSUI/maxresdefault.jpg')
    computerPins = [
    Pin(userId=6,title="derek1",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/236x/20/85/7a/20857a7e3183835fdff710771869df15.jpg"),
Pin(userId=6,title="derek2",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/564x/37/71/f9/3771f9afb113368ca31abb5e0aa9a882.jpg"),
Pin(userId=6,title="derek3",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/564x/3c/01/0d/3c010df11c2a709560c7cf33e9457275.jpg"),
Pin(userId=6,title="derek4",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/564x/f8/e2/be/f8e2be64ed593d5a1b4ecbb8051f98e6.jpg"),
Pin(userId=6,title="derek5",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/736x/8f/6f/c3/8f6fc333f93a8da943f93c1bf1328b9c.jpg"),
Pin(userId=6,title="derek6",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/564x/c0/74/ad/c074adadfed187035d98d427e4ea0753.jpg"),
Pin(userId=6,title="derek7",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/564x/fd/b5/c1/fdb5c12f1d01c205cd895c7af12ea421.jpg"),
Pin(userId=6,title="derek8",save=False,url="pinUrl",imageUrl="https://i.etsystatic.com/23665971/r/il/4bcce4/3445693810/il_794xN.3445693810_m4vj.jpg"),
Pin(userId=6,title="derek9",save=False,url="pinUrl",imageUrl="https://i.pinimg.com/736x/e7/34/09/e734092abcaa370d440aa59332451977.jpg"),
Pin(userId=6,title="derek10",save=False,url="pinUrl",imageUrl="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/19/11/campaign_images/buzzfeed-prod-fastlane-03/29-cool-and-random-things-you-can-probably-afford-2-21019-1497886981-2_dblbig.jpg"),
    ]

    for pin in computerPins:
        computersBoard.pins.append(pin)

    data.append(computersBoard)
    data.extend(computerPins)

    db.session.bulk_save_objects(data)
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
        db.session.execute("DELETE FROM boards")

    db.session.commit()
