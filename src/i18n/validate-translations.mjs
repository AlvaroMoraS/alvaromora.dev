#!/usr/bin/env node

// Script para validar que todas las traducciones tengan la misma estructura
import esTranslations from './es.js';
import enTranslations from './en.js';

function validateTranslationStructure(lang1, lang2, path = '') {
  const keys1 = Object.keys(lang1);
  const keys2 = Object.keys(lang2);
  
  // Verificar que tengan las mismas claves
  const missingInLang2 = keys1.filter(key => !keys2.includes(key));
  const missingInLang1 = keys2.filter(key => !keys1.includes(key));
  
  if (missingInLang1.length > 0) {
    console.error(`❌ Faltan claves en español: ${path}${missingInLang1.join(', ')}`);
    process.exit(1);
  }
  
  if (missingInLang2.length > 0) {
    console.error(`❌ Faltan claves en inglés: ${path}${missingInLang2.join(', ')}`);
    process.exit(1);
  }
  
  // Verificar objetos anidados recursivamente
  keys1.forEach(key => {
    if (typeof lang1[key] === 'object' && typeof lang2[key] === 'object') {
      validateTranslationStructure(lang1[key], lang2[key], `${path}${key}.`);
    }
  });
}

try {
  validateTranslationStructure(esTranslations, enTranslations);
  console.log('✅ Todas las traducciones tienen la misma estructura');
} catch (error) {
  console.error('❌ Error validando traducciones:', error.message);
  process.exit(1);
}
