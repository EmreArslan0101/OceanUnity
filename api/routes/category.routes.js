const express = require('express')

const {
  deleteCategory,
  getCategories,
  getCategory,
  updateCategoryTwo,
} = require('../controller/category.controller')

const router = express.Router()

router.put('/category-change-status/:id', updateCategoryTwo)
router.delete('/delete-category/:id', deleteCategory)
router.get('/get-categories', getCategories)
router.get('/get-category/:id', getCategory)

module.exports = router
