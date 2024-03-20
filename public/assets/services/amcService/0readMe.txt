dont forget to update the ImageCount.js file after making changes.

all images should have the same name and all images should have increasing index at the end.
- example: home(1).jpg, home(2).jpg, home(3).jpg, home(4).jpg, ... and so on.

dont skip any numbers in between.
- for example if you delete home(2).jpg between home(1).jpg and home(3).jpg
- rename home(3) to home(2) and home(4) to home(3) and so on.
- an easy solution is to delete the image then take the last image such as home(42).jpg and rename it to the file you deleted.
-- example: if home(2) is deleted rename last image home(42) to home(2)

The number after each image is the order they will appear in.

ALWALYS remember to update ImageCount.js,
if "about" folder has 5 images and you delete or add 1 image in the "about" folder,
change the count in ImageCount.js.

example:
    before delete:
        {
        hero: 6,
        serviceMenu: 6,
        about: 5,
        outdoorSignage: 24,
        indoorSignage: 39,
        neonSigns: 8,
        digitalSignage: 6,
        wayfinding: 10,
        amcService: 15,
        work: 0,
        }

    after delete:
        {
        hero: 6,
        serviceMenu: 6,
        about: ( 5 - 1 ) or ( 5 + 1 ),
        outdoorSignage: 24,
        indoorSignage: 39,
        neonSigns: 8,
        digitalSignage: 6,
        wayfinding: 10,
        amcService: 15,
        work: 0,
        }


No changes in ImageCount is needed if file is simply replaced with an image having the same name.