const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours: tours 
      }
    });
  }
  
exports.getTour = (req, res) => {
    const id = req.params.id * 1
  
    if(!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found'
      })
    }
  
    exports.tour = tours.find(el => el.id === id)
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  }
  
  exports.createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({id: newId}, req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
      // 201 = `created`
      res.status(201).json({
        status: "success", 
        data: {
          tour: newTour
        }
      })
    })
  }
  
  exports.updateTour = (req, res) =>  {
    const id = req.params.id * 1
  
    if(id > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found'
      })
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<Updated tour here...>'
      }
    })
  }
  
  exports.deleteTour = (req, res) => {
    const id = req.params.id * 1
  
    if(id > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found'
      })
    }
  
    // 204 = `no content` 
    res.status(204).json({
      status: 'success',
      data: null
    })
  }