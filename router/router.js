const { Router }  = require ("express");
const router = new Router();


router.get("/", (req, res)=>{
    res.render('home', {
        nombre: 'Cosme Fulanito',
        titulo: 'UTN Full Stack'
    }
    
    )
});

router.get("/generic", (req, res)=>{
    res.render('generic', {
        nombre: 'Cosme Fulanito',
        titulo: 'UTN Full Stack'
    })
});
router.get("/elements", (req, res)=>{
    res.render('elements',{
        nombre: 'Cosme Fulanito',
        titulo: 'UTN Full Stack'
    })
});



module.exports = router;