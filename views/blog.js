/*
* @Author: try.chen
* @Date:   2015-12-16 13:39:29
* @Last Modified by:   try.chen
* @Last Modified time: 2015-12-16 15:04:21
*/

'use strict';

var entries = [
    {"id":1, "title":"First", "text":"Text", "published":"6/2/2013"},
    {"id":2, "title":"Second", "text":"Text", "published":"6/3/2013"},
    {"id":3, "title":"Third", "text":"Text", "published":"6/4/2013"},
    {"id":4, "title":"Fourth", "text":"Text", "published":"6/5/2013"},
    {"id":5, "title":"Fifth", "text":"Text", "published":"6/10/2013"},
    {"id":6, "title":"Sixth", "text":"Text", "published":"6/12/2013"}
];

exports.getBlogEntries = function (){
   return entries;
}

exports.getBlogEntry = function (id){
   // for(var i=0; i < entries.length; i++){
      // if(entries[i].id == id)
        return entries[id];
   // }
}