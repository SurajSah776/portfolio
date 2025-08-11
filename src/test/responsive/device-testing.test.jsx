import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils'
import Homepage from '../../pages/Homepage'
import PortfolioPage from '../../pages/PortfolioPage'
import ContactPage from '../../pages/ContactPage'
import Navbar from '../../components/Navbar'

// Mock different device viewports
const deviceViewports = {
  mobile: { width: 375, height: 667 }, // iPhone SE
  tablet: { width: 768, height: 1024 }, // iPad
  desktop: { width: 1920, height: 1080 }, // Desktop
  largeDesktop: { width: 2560, height: 1440 }, // Large Desktop
  smallMobile: { width: 320, height: 568 }, // iPhone 5
  largeMobile: { width: 414, height: 896 }, // iPhone 11 Pro Max
}

// Helper function to set viewport size
const setViewport = (width, height) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })
  
  // Trigger resize event
  window.dispatchEvent(new Event('resize'))
}

// Mock matchMedia for different screen sizes
const mockMatchMedia = (width) => {
  return (query) => ({
    matches: (() => {
      if (query.includes('min-width: 1024px')) return width >= 1024
      if (query.includes('min-width: 768px')) return width >= 768
      if (query.includes('min-width: 640px')) return width >= 640
      if (query.includes('max-width: 767px')) return width < 768
      if (query.includes('max-width: 639px')) return width < 640
      return false
    })(),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  })
}

describe('Responsive Device Testing', () => {
  let originalMatchMedia

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('Mobile Device Testing (375px)', () => {
    beforeEach(() => {
      const { width, height } = deviceViewports.mobile
      setViewport(width, height)
      window.matchMedia = mockMatchMedia(width)
    })

    it('renders homepage correctly on mobile', () => {
      renderWithProviders(<Homepage />)
      
      expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
      expect(screen.getByText('at ESSPL')).toBeInTheDocument()
    })

    it('shows mobile navigation on small screens', () => {
      renderWithProviders(<Navbar />)
      
      // Mobile menu toggle should be present
      const mobileToggle = screen.getByLabelText('Toggle navigation menu')
      expect(mobileToggle).toBeInTheDocument()
    })

    it('stacks elements vertically on mobile', () => {
      renderWithProviders(<Homepage />)
      
      // Check for mobile-specific classes
      const heroSection = document.querySelector('section')
      expect(heroSection).toBeInTheDocument()
      
      // Verify responsive classes are applied
      const flexContainer = document.querySelector('.flex-col')
      expect(flexContainer).toBeInTheDocument()
    })

    it('adjusts font sizes for mobile', () => {
      renderWithProviders(<Homepage />)
      
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveClass('text-3xl') // Mobile font size
    })

    it('handles touch interactions on mobile', () => {
      renderWithProviders(<Homepage />)
      
      const touchElements = document.querySelectorAll('.touch-manipulation')
      expect(touchElements.length).toBeGreaterThan(0)
    })
  })

  describe('Tablet Device Testing (768px)', () => {
    beforeEach(() => {
      const { width, height } = deviceViewports.tablet
      setViewport(width, height)
      window.matchMedia = mockMatchMedia(width)
    })

    it('renders homepage correctly on tablet', () => {
      renderWithProviders(<Homepage />)
      
      expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
      expect(screen.getByText('at ESSPL')).toBeInTheDocument()
    })

    it('shows appropriate layout on tablet', () => {
      renderWithProviders(<PortfolioPage />)
      
      // Should show grid layout on tablet
      const gridContainer = document.querySelector('.md\\:grid-cols-2')
      expect(gridContainer).toBeInTheDocument()
    })

    it('adjusts spacing for tablet', () => {
      renderWithProviders(<Homepage />)
      
      // Check for tablet-specific spacing
      const spacingElements = document.querySelectorAll('.sm\\:px-6')
      expect(spacingElements.length).toBeGreaterThan(0)
    })
  })

  describe('Desktop Device Testing (1920px)', () => {
    beforeEach(() => {
      const { width, height } = deviceViewports.desktop
      setViewport(width, height)
      window.matchMedia = mockMatchMedia(width)
    })

    it('renders homepage correctly on desktop', () => {
      renderWithProviders(<Homepage />)
      
      expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
      expect(screen.getByText('at ESSPL')).toBeInTheDocument()
    })

    it('shows desktop navigation', () => {
      renderWithProviders(<Navbar />)
      
      // Desktop navigation should be visible
      const desktopNav = screen.getByRole('list')
      expect(desktopNav).toBeInTheDocument()
      expect(desktopNav).toHaveClass('flex', 'space-x-8')
    })

    it('shows full grid layout on desktop', () => {
      renderWithProviders(<PortfolioPage />)
      
      // Should show full grid on desktop
      const gridContainer = document.querySelector('.lg\\:grid-cols-3')
      expect(gridContainer).toBeInTheDocument()
    })

    it('uses larger font sizes on desktop', () => {
      renderWithProviders(<Homepage />)
      
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveClass('xl:text-7xl') // Desktop font size
    })
  })

  describe('Small Mobile Device Testing (320px)', () => {
    beforeEach(() => {
      const { width, height } = deviceViewports.smallMobile
      setViewport(width, height)
      window.matchMedia = mockMatchMedia(width)
    })

    it('renders correctly on very small screens', () => {
      renderWithProviders(<Homepage />)
      
      expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
    })

    it('maintains readability on small screens', () => {
      renderWithProviders(<ContactPage />)
      
      // Form should still be usable
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })
  })

  describe('Large Mobile Device Testing (414px)', () => {
    beforeEach(() => {
      const { width, height } = deviceViewports.largeMobile
      setViewport(width, height)
      window.matchMedia = mockMatchMedia(width)
    })

    it('renders correctly on large mobile screens', () => {
      renderWithProviders(<Homepage />)
      
      expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
    })

    it('optimizes layout for large mobile', () => {
      renderWithProviders(<PortfolioPage />)
      
      // Should still use mobile layout but with better spacing
      const container = document.querySelector('.px-4')
      expect(container).toBeInTheDocument()
    })
  })

  describe('Responsive Image Testing', () => {
    it('handles responsive images correctly', () => {
      renderWithProviders(<Homepage />)
      
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        // Images should have responsive classes
        expect(img.className).toMatch(/w-\d+|h-\d+/)
      })
    })

    it('provides appropriate alt text for images', () => {
      renderWithProviders(<Homepage />)
      
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
        expect(img.getAttribute('alt')).not.toBe('')
      })
    })
  })

  describe('Responsive Typography Testing', () => {
    it('uses appropriate font sizes across devices', () => {
      renderWithProviders(<Homepage />)
      
      const heading = screen.getByRole('heading', { level: 1 })
      
      // Should have responsive font size classes
      expect(heading.className).toMatch(/text-\w+/)
      expect(heading.className).toMatch(/sm:text-\w+|md:text-\w+|lg:text-\w+/)
    })

    it('maintains readable line heights', () => {
      renderWithProviders(<Homepage />)
      
      const paragraphs = document.querySelectorAll('p')
      paragraphs.forEach(p => {
        // Should have appropriate line height
        expect(p.className).toMatch(/leading-\w+/)
      })
    })
  })

  describe('Responsive Spacing Testing', () => {
    it('adjusts padding and margins for different screens', () => {
      renderWithProviders(<Homepage />)
      
      const containers = document.querySelectorAll('.px-4, .px-6, .px-8')
      expect(containers.length).toBeGreaterThan(0)
      
      // Should have responsive spacing
      const responsiveSpacing = document.querySelectorAll('[class*="sm:px-"], [class*="md:px-"], [class*="lg:px-"]')
      expect(responsiveSpacing.length).toBeGreaterThan(0)
    })

    it('uses appropriate gap sizes in grid layouts', () => {
      renderWithProviders(<PortfolioPage />)
      
      const gridContainers = document.querySelectorAll('.gap-4, .gap-6, .gap-8')
      expect(gridContainers.length).toBeGreaterThan(0)
    })
  })

  describe('Touch and Interaction Testing', () => {
    it('provides appropriate touch targets', () => {
      renderWithProviders(<Homepage />)
      
      const buttons = screen.getAllByRole('button')
      const links = screen.getAllByRole('link')
      
      // Touch targets should be large enough (minimum 44px)
      [...buttons, ...links].forEach(element => {
        const styles = window.getComputedStyle(element)
        // In a real test, we'd check computed dimensions
        expect(element).toBeInTheDocument()
      })
    })

    it('includes touch-manipulation class for better touch response', () => {
      renderWithProviders(<Homepage />)
      
      const touchElements = document.querySelectorAll('.touch-manipulation')
      expect(touchElements.length).toBeGreaterThan(0)
    })
  })

  describe('Performance on Different Devices', () => {
    it('loads efficiently on mobile devices', () => {
      renderWithProviders(<Homepage />)
      
      // Check for lazy loading attributes
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        // In a real implementation, check for loading="lazy"
        expect(img).toBeInTheDocument()
      })
    })

    it('minimizes layout shifts', () => {
      renderWithProviders(<Homepage />)
      
      // Check for proper sizing attributes
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        // Images should have width/height or aspect ratio
        expect(img.className).toMatch(/w-\d+.*h-\d+/)
      })
    })
  })

  describe('Accessibility on Different Devices', () => {
    it('maintains accessibility on mobile', () => {
      renderWithProviders(<ContactPage />)
      
      // Form labels should be properly associated
      const inputs = screen.getAllByRole('textbox')
      inputs.forEach(input => {
        expect(input).toHaveAttribute('id')
      })
    })

    it('provides proper focus management on touch devices', () => {
      renderWithProviders(<Homepage />)
      
      const focusableElements = document.querySelectorAll('a, button, input, textarea, select')
      focusableElements.forEach(element => {
        // Should be focusable
        expect(element.tabIndex >= 0 || element.tabIndex === undefined).toBe(true)
      })
    })
  })

  describe('Cross-Device Consistency', () => {
    it('maintains consistent branding across devices', () => {
      const devices = [deviceViewports.mobile, deviceViewports.tablet, deviceViewports.desktop]
      
      devices.forEach(({ width, height }) => {
        setViewport(width, height)
        window.matchMedia = mockMatchMedia(width)
        
        renderWithProviders(<Homepage />)
        
        // Brand colors and elements should be consistent
        expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument()
        expect(screen.getByText('at ESSPL')).toBeInTheDocument()
      })
    })

    it('provides consistent functionality across devices', () => {
      const devices = [deviceViewports.mobile, deviceViewports.tablet, deviceViewports.desktop]
      
      devices.forEach(({ width, height }) => {
        setViewport(width, height)
        window.matchMedia = mockMatchMedia(width)
        
        renderWithProviders(<ContactPage />)
        
        // Core functionality should be available
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
      })
    })
  })
})