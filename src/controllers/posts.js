const fs = require('fs');
const axios = require('axios');

const apiOptions = {
  server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://shielded-bayou-85397.herokuapp.com';
}


const publicBlogLinks = [{href: '/', linkName: 'Blog Posts'}, {href: '/about', linkName: 'About Weightlist'}];
const adminLinks = [{href: '/admin/add', linkName: 'Add Post'}, {href: '/admin/edit', linkName: 'Edit Posts'}, {href: '/admin', linkName: 'Sign Out'}];

const renderPosts = async (req,res) => {
    const path = '/api/posts';
    const url = `${apiOptions.server}${path}`;
    try {
        let data = [];
        const response = await axios.get(url);
        const status = await response.status;
        if(status === 200) {
          data = await response.data;
        }
        res.render('index', {
            title: 'Weightlist Blog',
            navitems: publicBlogLinks,
            posts: data,
        });
    } catch(e) {
        console.log(e);
    }
    
};

module.exports = {
  renderPosts
};

