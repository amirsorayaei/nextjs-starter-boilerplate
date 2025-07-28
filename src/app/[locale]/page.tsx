"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Calendar } from "@/components/ui/calendar";
import { ChartContainer } from "@/components/ui/chart";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from "recharts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Info,
  AlertTriangle,
  CheckCircle,
  Mail,
  Settings,
  User,
  Calendar as CalendarIcon,
  Download,
  Upload,
  Trash2,
  Edit,
  MoreHorizontal,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [progress, setProgress] = useState(13);
  const [sliderValue, setSliderValue] = useState([50]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const chartData = [
    { month: t("chart.jan"), total: 120 },
    { month: t("chart.feb"), total: 200 },
    { month: t("chart.mar"), total: 150 },
    { month: t("chart.apr"), total: 300 },
    { month: t("chart.may"), total: 250 },
    { month: t("chart.jun"), total: 400 },
  ];

  // Language switcher handler
  function handleSwitchLocale(locale: "en" | "fa") {
    // Replace the locale in the pathname
    router.replace(pathname, { locale });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      {/* Language Switcher */}
      <div className="flex justify-end mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {t("data.dropdownMenu.language")}
              <MoreHorizontal className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleSwitchLocale("en")}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSwitchLocale("fa")}>
              فارسی
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <main className="container mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            {t("header.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("header.description")}
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="default">{t("header.componentsCount")}</Badge>
            <Badge variant="secondary">{t("header.reactVersion")}</Badge>
            <Badge variant="outline">{t("header.ts")}</Badge>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">{t("tabs.basic")}</TabsTrigger>
            <TabsTrigger value="forms">{t("tabs.forms")}</TabsTrigger>
            <TabsTrigger value="feedback">{t("tabs.feedback")}</TabsTrigger>
            <TabsTrigger value="data">{t("tabs.data")}</TabsTrigger>
          </TabsList>

          {/* Basic Components Tab */}
          <TabsContent value="basic" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {t("basic.buttons.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("basic.buttons.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button>{t("basic.buttons.default")}</Button>
                    <Button variant="secondary">
                      {t("basic.buttons.secondary")}
                    </Button>
                    <Button variant="outline">
                      {t("basic.buttons.outline")}
                    </Button>
                    <Button variant="ghost">{t("basic.buttons.ghost")}</Button>
                    <Button variant="destructive">
                      {t("basic.buttons.destructive")}
                    </Button>
                    <Button variant="link">{t("basic.buttons.link")}</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">{t("basic.buttons.small")}</Button>
                    <Button size="default">
                      {t("basic.buttons.defaultSize")}
                    </Button>
                    <Button size="lg">{t("basic.buttons.large")}</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Cards */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    {t("basic.cards.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("basic.cards.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-20 bg-muted rounded-md flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">
                        {t("basic.cards.contentPlaceholder")}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t("basic.cards.descriptionText")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    {t("basic.badges.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("basic.badges.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>{t("basic.badges.default")}</Badge>
                    <Badge variant="secondary">
                      {t("basic.badges.secondary")}
                    </Badge>
                    <Badge variant="outline">{t("basic.badges.outline")}</Badge>
                    <Badge variant="destructive">
                      {t("basic.badges.destructive")}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Separator */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("basic.separator.title")}</CardTitle>
                  <CardDescription>
                    {t("basic.separator.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>Content above</div>
                  <Separator />
                  <div>Content below</div>
                </CardContent>
              </Card>

              {/* Skeleton */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("basic.skeleton.title")}</CardTitle>
                  <CardDescription>
                    {t("basic.skeleton.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </CardContent>
              </Card>

              {/* Toggle */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("basic.toggle.title")}</CardTitle>
                  <CardDescription>
                    {t("basic.toggle.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Toggle aria-label="Toggle bold">
                      <Settings className="h-4 w-4" />
                    </Toggle>
                    <Label htmlFor="toggle">
                      {t("basic.toggle.settingsLabel")}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Form Elements Tab */}
          <TabsContent value="forms" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Input Fields */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.inputFields.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.inputFields.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t("forms.inputFields.emailLabel")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("forms.inputFields.emailPlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">
                      {t("forms.inputFields.passwordLabel")}
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={t("forms.inputFields.passwordPlaceholder")}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Textarea */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.textarea.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.textarea.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea placeholder={t("forms.textarea.placeholder")} />
                </CardContent>
              </Card>

              {/* Checkbox */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.checkbox.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.checkbox.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">
                      {t("forms.checkbox.termsLabel")}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">
                      {t("forms.checkbox.newsletterLabel")}
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Switch */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.switch.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.switch.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">
                      {t("forms.switch.airplaneModeLabel")}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">
                      {t("forms.switch.notificationsLabel")}
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Radio Group */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.radioGroup.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.radioGroup.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">
                        {t("forms.radioGroup.optionOneLabel")}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">
                        {t("forms.radioGroup.optionTwoLabel")}
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Select */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.select.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.select.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t("forms.select.placeholder")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">
                        {t("forms.select.apple")}
                      </SelectItem>
                      <SelectItem value="banana">
                        {t("forms.select.banana")}
                      </SelectItem>
                      <SelectItem value="orange">
                        {t("forms.select.orange")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Slider */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.slider.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.slider.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-sm text-muted-foreground">
                    {t("forms.slider.valueText", { value: sliderValue[0] })}
                  </div>
                </CardContent>
              </Card>

              {/* Input OTP */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.inputOTP.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.inputOTP.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CardContent>
              </Card>

              {/* Toggle Group */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("forms.toggleGroup.title")}</CardTitle>
                  <CardDescription>
                    {t("forms.toggleGroup.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ToggleGroup type="single">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Settings className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <User className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="underline"
                      aria-label="Toggle underline"
                    >
                      <Mail className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("feedback.alerts.title")}</CardTitle>
                  <CardDescription>
                    {t("feedback.alerts.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>{t("feedback.alerts.successTitle")}</AlertTitle>
                    <AlertDescription>
                      {t("feedback.alerts.successDescription")}
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>{t("feedback.alerts.errorTitle")}</AlertTitle>
                    <AlertDescription>
                      {t("feedback.alerts.errorDescription")}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("feedback.progress.title")}</CardTitle>
                  <CardDescription>
                    {t("feedback.progress.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={progress} className="w-full" />
                  <div className="text-sm text-muted-foreground">
                    {t("feedback.progress.valueText", { progress: progress })}
                  </div>
                  <Button
                    onClick={() => setProgress(progress + 10)}
                    disabled={progress >= 100}
                    size="sm"
                  >
                    {t("feedback.progress.incrementButton")}
                  </Button>
                </CardContent>
              </Card>

              {/* Alert Dialog */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("feedback.alertDialog.title")}</CardTitle>
                  <CardDescription>
                    {t("feedback.alertDialog.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">
                        {t("feedback.alertDialog.deleteAccountButton")}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {t("feedback.alertDialog.areYouAbsolutelySureTitle")}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {t(
                            "feedback.alertDialog.areYouAbsolutelySureDescription"
                          )}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          {t("feedback.alertDialog.cancel")}
                        </AlertDialogCancel>
                        <AlertDialogAction>
                          {t("feedback.alertDialog.continue")}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>

              {/* Dialog */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("feedback.dialog.title")}</CardTitle>
                  <CardDescription>
                    {t("feedback.dialog.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>{t("feedback.dialog.openDialogButton")}</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          {t("feedback.dialog.editProfileTitle")}
                        </DialogTitle>
                        <DialogDescription>
                          {t("feedback.dialog.editProfileDescription")}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {t("feedback.dialog.nameLabel")}
                          </Label>
                          <Input
                            id="name"
                            placeholder={t("feedback.dialog.namePlaceholder")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            {t("feedback.dialog.emailLabel")}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t("feedback.dialog.emailPlaceholder")}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button>
                          {t("feedback.dialog.saveChangesButton")}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Drawer */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("feedback.drawer.title")}</CardTitle>
                  <CardDescription>
                    {t("feedback.drawer.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button>{t("feedback.drawer.openDrawerButton")}</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>
                          {t("feedback.drawer.editProfileTitle")}
                        </DrawerTitle>
                        <DrawerDescription>
                          {t("feedback.drawer.editProfileDescription")}
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">
                              {t("feedback.drawer.nameLabel")}
                            </Label>
                            <Input
                              id="name"
                              placeholder={t("feedback.drawer.namePlaceholder")}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">
                              {t("feedback.drawer.emailLabel")}
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder={t(
                                "feedback.drawer.emailPlaceholder"
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <DrawerFooter>
                        <Button>
                          {t("feedback.drawer.saveChangesButton")}
                        </Button>
                        <DrawerClose asChild>
                          <Button variant="outline">
                            {t("feedback.drawer.cancelButton")}
                          </Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CardContent>
              </Card>

              {/* Popover */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("feedback.popover.title")}</CardTitle>
                  <CardDescription>
                    {t("feedback.popover.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        {t("feedback.popover.openPopoverButton")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          {t("feedback.popover.dimensionsTitle")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("feedback.popover.dimensionsDescription")}
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              {/* Tooltip */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("feedback.tooltip.title")}</CardTitle>
                  <CardDescription>
                    {t("feedback.tooltip.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          {t("feedback.tooltip.hoverMeButton")}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("feedback.tooltip.tooltipText")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Display Tab */}
          <TabsContent value="data" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Table */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("data.table.title")}</CardTitle>
                  <CardDescription>
                    {t("data.table.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("data.table.name")}</TableHead>
                        <TableHead>{t("data.table.email")}</TableHead>
                        <TableHead>{t("data.table.status")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{t("data.table.johnDoeName")}</TableCell>
                        <TableCell>{t("data.table.johnDoeEmail")}</TableCell>
                        <TableCell>
                          <Badge>{t("data.table.activeBadge")}</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{t("data.table.janeSmithName")}</TableCell>
                        <TableCell>{t("data.table.janeSmithEmail")}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">
                            {t("data.table.inactiveBadge")}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("data.calendar.title")}</CardTitle>
                  <CardDescription>
                    {t("data.calendar.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border w-full"
                  />
                </CardContent>
              </Card>

              {/* Chart */}
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>{t("data.chart.title")}</CardTitle>
                  <CardDescription>
                    {t("data.chart.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      total: {
                        label: t("data.chart.totalLabel"),
                        color: "#8884d8",
                      },
                    }}
                  >
                    <LineChart data={chartData}>
                      <XAxis
                        dataKey="month"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value: number) => `${value}`}
                      />
                      <RechartsTooltip />
                      <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Pagination */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("data.pagination.title")}</CardTitle>
                  <CardDescription>
                    {t("data.pagination.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>

              {/* Dropdown Menu */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("data.dropdownMenu.title")}</CardTitle>
                  <CardDescription>
                    {t("data.dropdownMenu.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        {t("data.dropdownMenu.actionsButton")}
                        <MoreHorizontal className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>
                        {t("data.dropdownMenu.actionsLabel")}
                      </DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        {t("data.dropdownMenu.edit")}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        {t("data.dropdownMenu.download")}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4" />
                        {t("data.dropdownMenu.delete")}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center py-8 border-t">
          <p className="text-muted-foreground">{t("footer.builtWith")}</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" asChild>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.documentation")}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/shadcn/ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.github")}
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
