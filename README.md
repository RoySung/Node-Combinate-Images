# Merge Images With Every Combination

## Introduction

It is tool that merge images from different combination.



## Build Exec File

### Preinstall

- pkg

### Build

    pkg .

## Starting Quickly

    ./Node-Combinate-Images-*

    [
        [
            "assets/background/bg-00.jpg",
            "assets/cats/cat-00.png"
        ],
        [
            "assets/background/bg-00.jpg",
            "assets/cats/cat-01.png"
        ],
        [
            "assets/background/bg-00.jpg",
            "assets/cats/cat-02.png"
        ],
        [
            "assets/background/bg-01.jpg",
            "assets/cats/cat-00.png"
        ],
        [
            "assets/background/bg-01.jpg",
            "assets/cats/cat-01.png"
        ],
        [
            "assets/background/bg-01.jpg",
            "assets/cats/cat-02.png"
        ],
        [
            "assets/background/bg-02.jpg",
            "assets/cats/cat-00.png"
        ],
        [
            "assets/background/bg-02.jpg",
            "assets/cats/cat-01.png"
        ],
        [
            "assets/background/bg-02.jpg",
            "assets/cats/cat-02.png"
        ]
    ]

Output files to ./assets/output .

## Setting Example
    {
      "folders": [
        "background",
        "cats"
      ]
    }

It is folders from assets that you want to merge images in here. It will merge images for the sort.
