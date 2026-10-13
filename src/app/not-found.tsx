import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <main className="page-offset">
      <section className="section">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1 className="page-title">This page is not in the catalogue</h1>
          <p className="long-body" style={{ margin: '20px 0 32px' }}>
            The link may have moved. Return home or open the product list.
          </p>
          <div className="hero__actions">
            <Button href="/" variant="dark">
              Home
            </Button>
            <Button href="/products">Products</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
