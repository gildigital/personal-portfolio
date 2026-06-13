import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(3000, { message: "Message must be under 3000 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out — I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Message failed");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-secondary/40 border-t border-border">
      <div className="container">
        <p className="mono-label mb-2">Contact</p>
        <h2 className="section-title">Let&apos;s talk tools</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-muted-foreground max-w-md">
              I&apos;m open to equipment and process engineering roles — especially{" "}
              <span className="text-foreground">dry etch</span> and{" "}
              <span className="text-foreground">high-vacuum</span> toolsets. Reach out and let&apos;s
              discuss how I can help keep your fab running.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:martinezgil.sd@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>martinezgil.sd@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/gil-martinez-phys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/gil-martinez-phys</span>
              </a>
              <a
                href="https://github.com/gildigital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/gildigital</span>
              </a>
            </div>

            <div className="pt-8">
              <p className="font-mono text-sm text-muted-foreground/70">
                Physicist by training, equipment engineer by trade — precision under pressure, from the
                flightline to the fab.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-background border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email address" type="email" {...field} className="bg-background border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} className="min-h-32 bg-background border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
