import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { Bath, BedDouble, MapPin, TriangleRight } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <main className="space-y-8 w-full h-full">
      <section className="flex flex-col-reverse md:flex-row items-stretch justify-center gap-4 md:p-8 p-2 ">
        <div className="relative w-full md:w-1/2 h-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY0lGT7mcL1RRI4ZCB9zCk4BNvoypuJG-JsUMWD7eNw8X_7wZ8NuW0NbEZCjH6jQXbbDwQOPQ-uhu0tCYADtyoL7VtxRtMJJOr7DpqEZkcyhwAjkuyeVtqpY1soNakfPJcQK7O95z6xY8ZAjgwO7B3P2h-BKEdKlmOLVvpT_hEdwpSyy0FZLqR4YDZJYEzm6YNN7U70kkk8hEWfhutVmOx5vhjL8wFY36sgfg12QYMSAXBBzGxtrnWRr3Ct7AiEYI6MFlj0hYuNKE"
            alt=""
            className="object-cover aspect-4/5 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
          <div className="absolute -bottom-5 right-10 bg-background text-foreground ring ring-primary w-fit h-fit p-8 space-y-1">
            <p className="w-full text-primary tracking-widest font-semibold text-xs">
              SENIOR PARTNER
            </p>
            <h1 className="font-bold text-xl">Marcus Thorne</h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 h-full space-y-4">
          <p className="w-full text-primary tracking-widest font-semibold text-sm">
            GLOBAL ADVISOR SPOTLIGHT
          </p>
          <h1 className="font-bold text-5xl md:text-6xl">
            Defining Architectural Excellence.
          </h1>
          <p>
            With over two decades of experience in the ultra-high-net-worth
            segment, Marcus Thorne provides unparalleled advisory for the
            world's most significant estates.
          </p>
          <Separator />
          <div className="flex items-stretch justify-between w-full h-full">
            <div className="flex flex-col items-center justify-between gap-4 max-w-1/2 md:w-full">
              <p className="w-full tracking-widest font-semibold text-xs text-center">
                GLOBAL ADVISOR SPOTLIGHT
              </p>
              <h1 className="font-bold text-4xl text-primary">$2B+</h1>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 max-w-1/2 md:w-full">
              <p className="w-full tracking-widest font-semibold text-xs text-center">
                MARKETS COVERED
              </p>
              <h1 className="font-bold text-4xl text-primary">14</h1>
            </div>
          </div>
          <Separator />
          <div className="flex gap-4 items-center justify-items-start">
            <Button variant={"secondary"} size={"lg"}>
              Request Consultation
            </Button>
            <Button variant={"outline"} size={"lg"}>
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-muted text-muted-foreground md:p-8 md:pb-16 p-4 space-y-8">
        <div className="flex items-end justify-between w-full">
          <div className="space-y-2">
            <p className="w-full tracking-widest font-semibold text-primary text-xs">
              THE COLLECTIVE
            </p>
            <h1 className="font-bold text-xl md:text-3xl text-secondary">
              Elite Advisory Network
            </h1>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-4 gap-4">
          {[...Array(8)].map((i, _) => (
            <Card key={_}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2R1vpKyOenZF6GLP1fycHP8ufDQ9ouiXzB-7sopSJc9wzsw4r3DRfu9LularC0yEoPOyCwrFMxEmrpuKwpiztbYiCLmEiF2IWp9Y0uVne7by5TEiNTmQxZIHrYoFVS4irT7N0czJUMzs4hKUZkKFLj-cqFv52p2mTU7nWczEC0KHeS53V7gbAwmugU-mjMQx8RQP2CwXssRc2YBmDqiuUnnbrBTIf0RsoTTglELQpW-rvLn6qMqLoEsOwdvNjBvABYojXqnMIXv4"
                alt=""
                className="object-cover aspect-4/5"
              />
              <CardHeader>
                <CardTitle>Elena Vance</CardTitle>
                <CardDescription>
                  Director of Waterfront Properties, Malibu & Monaco.
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardFooter className="gap-4">
                <Badge variant={"outline"}>YATCHING</Badge>
                <Badge variant={"outline"}>ARCHITECTURE</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="block md:hidden w-full">
          <ItemGroup>
            {[...Array(8)].map((i, _) => (
              <Item
                key={_}
                className="hover:bg-accent items-start"
                // onClick={() => router.push(`/properties/${_}`)}
              >
                <ItemMedia variant={"image_lg"}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2R1vpKyOenZF6GLP1fycHP8ufDQ9ouiXzB-7sopSJc9wzsw4r3DRfu9LularC0yEoPOyCwrFMxEmrpuKwpiztbYiCLmEiF2IWp9Y0uVne7by5TEiNTmQxZIHrYoFVS4irT7N0czJUMzs4hKUZkKFLj-cqFv52p2mTU7nWczEC0KHeS53V7gbAwmugU-mjMQx8RQP2CwXssRc2YBmDqiuUnnbrBTIf0RsoTTglELQpW-rvLn6qMqLoEsOwdvNjBvABYojXqnMIXv4"
                    alt=""
                    className="object-cover w-full h-fit"
                  />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="font-semibold">Elena Vance</ItemTitle>
                  <ItemDescription className="text-xs">
                    Director of Waterfront Properties, Malibu & Monaco.
                  </ItemDescription>
                </ItemContent>
                <Separator />
                <ItemFooter className="gap-4 flex justify-start">
                  <Badge variant={"outline"}>YATCHING</Badge>
                  <Badge variant={"outline"}>ARCHITECTURE</Badge>
                </ItemFooter>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </section>
    </main>
  );
};

export default Page;
