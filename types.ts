import Stripe from "stripe";

export type UserDetails = {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_address?:Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
};

export type Subscription = {
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  price_id?: string;
  quantity?: number;
  created?: string;
  cancel_at_period_end?:boolean;
  current_period_start?: string;
  current_period_end?: string;
  ended_at? : string;
  cancel_at?: string;
  canceled_at? : string;
  trial_start? : string;
  trial_end? : string;
  prices?: Price
};

export type Price = {
  id: string;
  product_id?: string;
  active?: boolean;
  description?: string;
  unit_amount? : number;
  currency?: string;
  type? : string;
  interval? : string;
  interval_count?:number;
  trial_period_days? : number;
  metadata?: Stripe.Metadata;
  products ? : Product;
};

export type Product = {
  id: string;
  name?: string;
  description?: string;
  active?: boolean;
  image? : string;
  metadata? : Stripe.Metadata;
}
