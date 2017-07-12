[![Version](https://img.shields.io/badge/version-0.3.1-brightgreen.svg)]()

# swiftmon

swiftmon restarts your swift application in case of any file change

## Requirements
Installed in system *swift*, *npm*, *node*

## Installing
You need to install **swiftmon** by:
`npm i -g swiftmon`.

## Running
In your project where you have previously inited environment by `swift package init`,
call `swiftmon` for listening changes and restart your application immediately.
If you need to listen specific directory start **swiftmon** with next: `swiftmon --b Sources/services`
