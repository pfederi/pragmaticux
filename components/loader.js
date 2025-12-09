/**
 * Component Loader for Pragmatic UX Design
 * Dynamically loads HTML components into the main page
 */

class ComponentLoader {
    constructor() {
        this.components = [
            { id: 'hero-container', file: 'components/hero.html' },
            { id: 'decision-helper-container', file: 'components/decision-helper.html' },
            { id: 'about-container', file: 'components/about.html' },
            { id: 'contact-container', file: 'components/contact.html' }
        ];
    }

    /**
     * Load a single component
     * @param {string} containerId - The ID of the container element
     * @param {string} filePath - Path to the HTML file
     */
    async loadComponent(containerId, filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.status}`);
            }
            
            const html = await response.text();
            const container = document.getElementById(containerId);
            
            if (container) {
                container.innerHTML = html;
                console.log(`✅ Loaded component: ${filePath}`);
            } else {
                console.warn(`⚠️ Container not found: ${containerId}`);
            }
        } catch (error) {
            console.error(`❌ Error loading component ${filePath}:`, error);
        }
    }

    /**
     * Load the workflow component into the decision helper
     */
    async loadWorkflowIntoDecisionHelper() {
        try {
            const response = await fetch('components/workflow.html');
            if (!response.ok) {
                throw new Error(`Failed to load workflow: ${response.status}`);
            }
            
            const html = await response.text();
            const container = document.getElementById('workflow-container');
            
            if (container) {
                container.innerHTML = html;
                console.log('✅ Loaded workflow into decision helper');
            }
        } catch (error) {
            console.error('❌ Error loading workflow:', error);
        }
    }

    /**
     * Load all components
     */
    async loadAllComponents() {
        console.log('🚀 Loading all components...');
        
        // Load main components in parallel
        const loadPromises = this.components.map(component => 
            this.loadComponent(component.id, component.file)
        );
        
        await Promise.all(loadPromises);
        
        // Load workflow into decision helper after decision helper is loaded
        // Add small delay to ensure DOM is ready
        setTimeout(() => this.loadWorkflowIntoDecisionHelper(), 100);
        
        console.log('✅ All components loaded successfully');
        
        // Dispatch custom event to signal components are ready
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
    }

    /**
     * Initialize the component loader
     */
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadAllComponents());
        } else {
            this.loadAllComponents();
        }
    }
}

// Initialize the component loader
const componentLoader = new ComponentLoader();
componentLoader.init();
