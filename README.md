# README

The repository for matthew.akinowittering.com, a Jekyll site hosted on GitHub pages.

# Development

To make development easy, this Jekyll site can be run inside a docker container. To launch the container run the following command.

    docker-compose up -d

To close the container run.

    docker-compose down -d

When new packages and external libraries are installed, they will need to be copied into the assets directory use [copy-files-from-to](https://www.npmjs.com/package/copy-files-from-to) to move the files into the desired directory tree.

    npm install -g copy-files-from-to

To use the `copy-files-from-to` run the following command in the terminal.

    copy-files-from-to
