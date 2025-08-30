import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageCircle, Eye, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    excerpt?: string;
    featured_image?: string;
    tags?: string[];
    likes_count: number;
    comments_count: number;
    views_count: number;
    created_at: string;
    author_id: string;
  };
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <Link to={`/blog/${blog.id}`}>
        {blog.featured_image && (
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <img 
              src={blog.featured_image} 
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs">
                A
              </AvatarFallback>
            </Avatar>
            <span>Author</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDistanceToNow(new Date(blog.created_at), { addSuffix: true })}</span>
            </div>
          </div>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
            {blog.title}
          </CardTitle>
          {blog.excerpt && (
            <CardDescription className="line-clamp-3">
              {blog.excerpt}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {blog.tags?.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{blog.likes_count}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{blog.comments_count}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{blog.views_count}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};