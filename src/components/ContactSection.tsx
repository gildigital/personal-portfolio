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
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
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
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Message failed");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container">
        <h2 className="section-title text-primary-foreground after:bg-accent">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">Reach Out</h3>
            <p className="text-primary-foreground/80 max-w-md">
              Let's discuss software engineering opportunities. I'm currently
              available for full-time roles and interesting projects where I can
              make a meaningful impact.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:martinezgil.sd@gmail.com"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>martinezgil.sd@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/gil-martinez-phys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/gil-martinez-phys</span>
              </a>

              <a
                href="https://github.com/gildigital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/gildigital</span>
              </a>
            </div>

            <div className="pt-8">
              <p className="font-mono text-sm text-primary-foreground/60">
                From aircraft to algorithms, my journey has prepared me to solve
                complex problems with precision and creativity.
              </p>
            </div>
          </div>

          <div
            className="animate-fade-in-left"
            style={{ animationDelay: "0.3s" }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                        />
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
                        <Input
                          placeholder="Your email address"
                          type="email"
                          {...field}
                          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                        />
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
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          className="min-h-32 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary hover:bg-accent/80"
                >
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
