# HSE project management demo app  

Square root calculator

This web application provides simple way to calculate square roots.  
Calculation: complex numbers or big numbers are supported. Output precision can be adjusted.  
Simplification: support for expression simplification.  
Localization: Built-in 118n supoprt with two languages provided by default.

Limitations:
- Complex numbers have lower pecision due to implementation details
- Complex numbers are not supported in simplification

Application is hosted on Vercel: https://hse-opd-square-root.vercel.app/

## Setup

```sh
make install
```

## Build

Execute the following command to bundle the website

```sh
make build
```

The site will be packaged to dist folder. You can host it using your preffered server.


## Develop

```sh
make develop
```

## Localization

To add new localizations add locale to available language list in lang_list.json file and add resource file with corresponding name: \locales\{locale_name}\translation.json.