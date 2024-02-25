const Category = require('../models/category.model')
const asyncHandler = require('express-async-handler')

const createCategory = asyncHandler(async (req, res) => {
  const { name, image } = req.body

  const newCategory = new Category({ name, image })
  await newCategory.save()
  res.status(200).json(newCategory)
})

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort('-createdAt')
  res.status(200).json(categories)
})

const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (!category) {
    res.status(404)
    throw new Error('Category Not Found!')
  }
  res.status(200).json(category)
})

const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (!category) {
    res.status(404)
    throw new Error('Category Not Found!')
  }
  await Category.deleteOne({ _id: req.params.id })
  res.status(200).json('Category Deleted Successfully')
})

const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.body._id)
  if (!category) {
    res.status(404)
    throw new Error('Category Not Found!')
  }
  const updatedCategory = await Category.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true }
  )
  res.status(200).json(updatedCategory)
})

const updateCategoryTwo = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (!category) {
    res.status(404)
    throw new Error('Category Not Found!')
  }
  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.status(200).json(updatedCategory)
})

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  getCategories,
  getCategory,
  updateCategoryTwo,
}
