<template>
  <div class="course-container">
    <!-- Titre principal -->
    
    
    <!-- Carte de cours -->
    <div class="course-card">
      <div class="card bg-white shadow-lg w-80 h-50">
        <!-- Description (seulement si elle existe) -->
        <div v-if="description" class="course-description">
          {{ description }}
        </div>
        
        <div class="card-body mt-12">
          <h2 class="card-title text-lg font-bold">{{ title }}</h2>
          <p class="text-xs text-gray-600">{{ author }}</p>
          
          <!-- Note et avis -->
          <div class="flex items-center rating-container">
            <span class="text-yellow-500 font-semibold text-sm">{{ numericRating }}</span>
            <span class="text-yellow-500">⭐</span>
            <span class="text-xs text-gray-500">({{ numericReviews }})</span>
          </div>
          
          <!-- Prix -->
          <div class="flex items-center price-container">
            <span class="text-lg font-bold text-black">{{ price }} $US</span>
            <span class="text-sm text-gray-500 line-through ml-2">{{ originalPrice }} $US</span>
          </div>
          
          <!-- Badge -->
          <span v-if="badge" :class="badgeClass" class="badge">
            {{ badge }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: String, required: true },
  rating: { 
    type: [Number, String],
    required: true,
    validator: value => !isNaN(value)
  },
  reviews: {
    type: [Number, String],
    required: true,
    validator: value => !isNaN(value)
  },
  price: { type: String, required: true },
  originalPrice: { type: String, required: true },
  badge: { type: String, required: false }
});

const numericRating = computed(() => Number(props.rating));
const numericReviews = computed(() => Number(props.reviews));

const badgeClass = computed(() => {
  if (props.badge === 'Meilleure vente') return 'bg-blue-200 text-blue-700';
  if (props.badge === 'Nouveau') return 'bg-green-200 text-green-700';
  return 'bg-gray-200 text-gray-800';
});
</script>

<style scoped>
.course-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.course-section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}

.course-card {
  display: flex;
  justify-content: center;
}

.course-description {
  padding: 0.5rem;
  color: #4a5568;
  font-size: 0.875rem;
}

.rating-container {
  margin: 0.5rem 0;
}

.price-container {
  margin: 0.5rem 0 1rem;
}

.badge {
  display: inline-block;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}
</style>