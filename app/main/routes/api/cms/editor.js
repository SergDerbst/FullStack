'use strict';

module.exports = function(router) {
    router.route('/cms/editor').get(function(req, res) {
        res.json(
            {
                data: [
                    {
                        id: 'header',
                        itemNumber: '0',
                        tag: 'h3',
                        type: 'text',
                        css: 'cnt-title',
                        content: 'The Title of all Contents'
                    },
                    {
                        id: 'header',
                        itemNumber: '1',
                        tag: 'p',
                        type: 'text',
                        css: 'cnt-abstract',
                        children: [
                            {
                                id: 'header',
                                itemNumber: '1.0',
                                tag: 'b',
                                type: 'text',
                                content: 'This abstract is a little bit too abstract.'
                            },
                            {
                                id: 'header',
                                itemNumber: '1.1',
                                tag: 'span',
                                type: 'text',
                                content: 'But it has children, yo!'
                            }
                        ]
                    },
                    {
                        id: 'header',
                        itemNumber: '2',
                        tag: 'p',
                        type: 'text',
                        css: 'cnt-text',
                        content: 'And now the blabla starts!'
                    }
                ]
            }
        );
    });
};