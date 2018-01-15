
var path = require('path')
var fs = require('fs')

// var data_path = path.join(__dirname, "../data")
var html_path = path.join(__dirname, "../app/static/html/")
var donation_file = path.join(__dirname, "../data/donations.md")
var register_file = path.join(__dirname, "../data/register.csv")



function home_page(req, res)
{
    res.sendFile(html_path + "index.html")
}

function get_donations(req, res)
{
  res.sendFile(donation_file)
}

function get_register(req, res)
{
  res.sendFile(register_file)
}



module.exports = { home_page, get_donations, get_register }
