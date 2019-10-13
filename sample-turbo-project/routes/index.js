// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.get('/query',(req,res)=>{ //Los parámetros de Query van con ?clave=valor. Para poner más & y siguiente
	const name = req.query.name
	const occupation = req.query.occupation
	const data = {
		name: name,
		occupation: occupation
	}
	res.render('profile',data);
})

router.get('/:path', (req,res) =>{
	const path = req.params.path; // En express todo request tiene un params asociado
	res.json({
		data: path
	})
})

router.get('/:profile/:username', (req,res) =>{
	const profile = req.params.profile; 
	const username = req.params.username;
	res.json({
		profile: profile,
		username: username
	})
})



module.exports = router
