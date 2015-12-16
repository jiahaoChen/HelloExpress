/*
* @Author: try.chen
* @Date:   2015-12-16 11:41:01
* @Last Modified by:   try.chen
* @Last Modified time: 2015-12-16 11:41:52
*/

'use strict';
exports.index = function (req, res) {
    res.json(200, {name: 'Try.Chen', age: '30'});
};