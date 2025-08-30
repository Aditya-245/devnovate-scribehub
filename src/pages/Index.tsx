import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/Layout/Layout';
import { BlogCard } from '@/components/Blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { data: latestBlogs, isLoading: loadingLatest } = useQuery({
    queryKey: ['blogs', 'latest'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          id,
          title,
          excerpt,
          featured_image,
          tags,
          likes_count,
          comments_count,
          views_count,
          created_at,
          author_id
        `)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      return data;
    },
  });

  const { data: trendingBlogs, isLoading: loadingTrending } = useQuery({
    queryKey: ['blogs', 'trending'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          id,
          title,
          excerpt,
          featured_image,
          tags,
          likes_count,
          comments_count,
          views_count,
          created_at,
          author_id
        `)
        .eq('status', 'approved')
        .order('likes_count', { ascending: false })
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Welcome to Blogify by Devnovate
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            A platform where developers share knowledge, insights, and innovative ideas. 
            Join our community and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/search">Explore Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,234</p>
                  <p className="text-muted-foreground">Articles</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">567</p>
                  <p className="text-muted-foreground">Writers</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8,901</p>
                  <p className="text-muted-foreground">Likes</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="p-3 rounded-lg bg-destructive/10">
                  <TrendingUp className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold">234</p>
                  <p className="text-muted-foreground">This Month</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Trending Articles</h2>
              <p className="text-muted-foreground">Most popular articles this week</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/trending" className="flex items-center space-x-2">
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {loadingTrending ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-video bg-muted rounded-t-lg"></div>
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingBlogs?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">Fresh content from our community</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/search" className="flex items-center space-x-2">
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {loadingLatest ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-video bg-muted rounded-t-lg"></div>
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestBlogs?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
