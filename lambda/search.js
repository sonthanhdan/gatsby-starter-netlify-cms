// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
const { Link, graphql, useStaticQuery } = require('gatsby');



module.exports.handler = async function(event, context) {
  console.log("queryStringParameters", event.queryStringParameters)
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! This is better " + Math.round(Math.random() * 10),
      data: data
    })
  }
}

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
