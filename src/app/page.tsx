import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main style={{ 
      padding: "48px",
      fontFamily: "var(--font-roboto-flex), -apple-system, Roboto, Helvetica, sans-serif",
    }}>
      <h1 style={{ 
        fontSize: "32px", 
        fontWeight: 500, 
        marginBottom: "32px",
        color: "#30393A"
      }}>
        Button Component Design System
      </h1>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: 500, 
          marginBottom: "24px",
          color: "#30393A"
        }}>
          Contained Buttons
        </h2>
        
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Large
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="contained" color="primary" size="large">Primary</Button>
            <Button variant="contained" color="secondary" size="large">Secondary</Button>
            <Button variant="contained" color="tertiary" size="large">Tertiary</Button>
            <Button variant="contained" color="destructive" size="large">Destructive</Button>
            <Button variant="contained" color="approve" size="large">Approve</Button>
            <Button variant="contained" color="primary" size="large" disabled>Disabled</Button>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Medium
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="contained" color="primary" size="medium">Primary</Button>
            <Button variant="contained" color="secondary" size="medium">Secondary</Button>
            <Button variant="contained" color="tertiary" size="medium">Tertiary</Button>
            <Button variant="contained" color="destructive" size="medium">Destructive</Button>
            <Button variant="contained" color="approve" size="medium">Approve</Button>
            <Button variant="contained" color="primary" size="medium" disabled>Disabled</Button>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Small
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="contained" color="primary" size="small">Primary</Button>
            <Button variant="contained" color="secondary" size="small">Secondary</Button>
            <Button variant="contained" color="tertiary" size="small">Tertiary</Button>
            <Button variant="contained" color="destructive" size="small">Destructive</Button>
            <Button variant="contained" color="approve" size="small">Approve</Button>
            <Button variant="contained" color="primary" size="small" disabled>Disabled</Button>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: 500, 
          marginBottom: "24px",
          color: "#30393A"
        }}>
          Outlined Buttons
        </h2>
        
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Large
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="outlined" color="primary" size="large">Primary</Button>
            <Button variant="outlined" color="secondary" size="large">Secondary</Button>
            <Button variant="outlined" color="tertiary" size="large">Tertiary</Button>
            <Button variant="outlined" color="destructive" size="large">Destructive</Button>
            <Button variant="outlined" color="approve" size="large">Approve</Button>
            <Button variant="outlined" color="primary" size="large" disabled>Disabled</Button>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Medium
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="outlined" color="primary" size="medium">Primary</Button>
            <Button variant="outlined" color="secondary" size="medium">Secondary</Button>
            <Button variant="outlined" color="tertiary" size="medium">Tertiary</Button>
            <Button variant="outlined" color="destructive" size="medium">Destructive</Button>
            <Button variant="outlined" color="approve" size="medium">Approve</Button>
            <Button variant="outlined" color="primary" size="medium" disabled>Disabled</Button>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Small
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="outlined" color="primary" size="small">Primary</Button>
            <Button variant="outlined" color="secondary" size="small">Secondary</Button>
            <Button variant="outlined" color="tertiary" size="small">Tertiary</Button>
            <Button variant="outlined" color="destructive" size="small">Destructive</Button>
            <Button variant="outlined" color="approve" size="small">Approve</Button>
            <Button variant="outlined" color="primary" size="small" disabled>Disabled</Button>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: 500, 
          marginBottom: "24px",
          color: "#30393A"
        }}>
          Text Buttons
        </h2>
        
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Large
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="text" color="primary" size="large">Primary</Button>
            <Button variant="text" color="secondary" size="large">Secondary</Button>
            <Button variant="text" color="tertiary" size="large">Tertiary</Button>
            <Button variant="text" color="destructive" size="large">Destructive</Button>
            <Button variant="text" color="approve" size="large">Approve</Button>
            <Button variant="text" color="primary" size="large" disabled>Disabled</Button>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Medium
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="text" color="primary" size="medium">Primary</Button>
            <Button variant="text" color="secondary" size="medium">Secondary</Button>
            <Button variant="text" color="tertiary" size="medium">Tertiary</Button>
            <Button variant="text" color="destructive" size="medium">Destructive</Button>
            <Button variant="text" color="approve" size="medium">Approve</Button>
            <Button variant="text" color="primary" size="medium" disabled>Disabled</Button>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Small
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="text" color="primary" size="small">Primary</Button>
            <Button variant="text" color="secondary" size="small">Secondary</Button>
            <Button variant="text" color="tertiary" size="small">Tertiary</Button>
            <Button variant="text" color="destructive" size="small">Destructive</Button>
            <Button variant="text" color="approve" size="small">Approve</Button>
            <Button variant="text" color="primary" size="small" disabled>Disabled</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
