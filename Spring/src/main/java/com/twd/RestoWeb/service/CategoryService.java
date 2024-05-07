package com.twd.RestoWeb.service;

import com.twd.RestoWeb.ExceptionHandling.ResourceNotFoundException;
import com.twd.RestoWeb.entity.Category;
import com.twd.RestoWeb.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    // Create operation
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    // Read operation
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(int id) {
        return categoryRepository.findById(id);
    }

    // Update operation
    public Category updateCategory(int id, Category categoryDetails) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        if (optionalCategory.isPresent()) {
            Category category = optionalCategory.get();
            category.setNameCategory(categoryDetails.getNameCategory());
            return categoryRepository.save(category);
        } else {
            try {
                throw new ResourceNotFoundException("Category not found with id: " + id);
            } catch (ResourceNotFoundException e) {
                throw new RuntimeException(e);
            }
        }
    }

    // Delete operation
    public void deleteCategory(int id) {
        categoryRepository.deleteById(id);
    }
}
