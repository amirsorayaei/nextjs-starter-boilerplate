"use client";

import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { currentThemes, useTheme } from "@/contexts/ThemeContext";

export default function ThemeDemoPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Theme Demo</h1>
            <div className="text-muted-foreground">
              Current theme: <Badge variant="secondary">{theme}</Badge>
            </div>
          </div>
          <ThemeSwitcher />
        </div>

        <Separator />

        {/* Theme Information */}
        <Card>
          <CardHeader>
            <CardTitle>Available Themes</CardTitle>
            <CardDescription>
              Switch between different color schemes to see how components adapt
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {currentThemes.map((themeName) => (
                <div
                  key={themeName}
                  onClick={() => setTheme(themeName)}
                  className={`p-4 rounded-lg border-2 cursor-pointer ${
                    theme === themeName
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold capitalize">
                      {themeName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {theme === themeName ? "Active" : "Click to activate"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Component Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Different button variants and sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Elements */}
          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>Input fields and labels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </CardContent>
          </Card>

          {/* Badges and Status */}
          <Card>
            <CardHeader>
              <CardTitle>Badges & Status</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Color Palette */}
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>Theme color variations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Primary</div>
                  <div className="h-8 bg-primary rounded" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Secondary</div>
                  <div className="h-8 bg-secondary rounded" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Accent</div>
                  <div className="h-8 bg-accent rounded" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Muted</div>
                  <div className="h-8 bg-muted rounded" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Theme Info */}
        <Card>
          <CardHeader>
            <CardTitle>Current Theme: {theme}</CardTitle>
            <CardDescription>
              This card shows how the current theme affects the appearance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              The current theme is <strong>{theme}</strong>. All components
              above are automatically styled according to this theme&apos;s
              color scheme. Try switching themes using the theme switcher in the
              top right corner to see the changes in real-time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
