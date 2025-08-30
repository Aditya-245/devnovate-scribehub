import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-heading font-bold text-xl">Blogify</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A platform for developers to share knowledge, insights, and innovative ideas.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/trending" className="text-muted-foreground hover:text-foreground transition-colors">Trending</Link></li>
              <li><Link to="/search" className="text-muted-foreground hover:text-foreground transition-colors">Explore</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Guidelines</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Blogify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};