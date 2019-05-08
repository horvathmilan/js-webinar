'use strict';

const Layout = require('./Layout');
const Element = require('./Element');

class HomePage extends Layout {
    constructor() {
        super('HomePage', 'https://epam.com', {css: 'body'});
        this.logo = new Element('Logo', {css: '.header__logo'});
        this.addChildren(this.logo);

        this.rollOver = new Element('RollOver', {css: '.rollover-tiles-ui'});
        this.addChildren(this.rollOver);

        this.header = new Element('Header', {css: '.header__content'});
        this.addChildren(this.header);

        this.title = new Element('Title', {css: '.background-video__content .text'});
        this.addChildren(this.title);
    }
}

module.exports = HomePage;