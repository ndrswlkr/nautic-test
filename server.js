
import mojo from "@mojojs/core"
const app = mojo()

function serverSetup () {
    app.static.publicPaths.push(app.home.child('dist').toString())
    app.static.prefix = ''
    //session
    app.session.cookieName = 'mojo-session'
    app.session.sameSite = 'strict'
    //plugins
    //app.plugin(authPlugin)
    //db
    //app.models.db = connect(app.home.child('db', 'work-diary.db').toString())
  }
  
  serverSetup()
  app.get('/', async ctx => {
    await ctx.sendFile(ctx.home.child('dist', 'index.html'))
  })

app.get('/test', async ctx => {
    const url = 'https://alltheflavors.com/flavor/wonder-flavours-caramel-popcorn-and-peanuts'
    const res   = await ctx.ua.get(url);
    const html  = await res.html();
    const title = html.at('title').text();
    await ctx.render({text: `the title is ${title}`})
})


app.start()
