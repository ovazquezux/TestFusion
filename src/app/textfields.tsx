'use client';

import { TextField } from '@/components/TextField';

export default function TextFieldsShowcase() {
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
        TextField Component Design System
      </h1>

      {/* Standard Variant */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: 500, 
          marginBottom: "24px",
          color: "#30393A"
        }}>
          Standard Variant
        </h2>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Medium
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="medium"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="medium"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="medium"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="medium"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="medium"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="medium"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="medium"
                error
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="medium"
                error
                fullWidth
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Small
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="small"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="small"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="small"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="small"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="small"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="small"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (Empty)</p>
              <TextField
                label="Label"
                variant="standard"
                size="small"
                error
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="standard"
                size="small"
                error
                fullWidth
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filled Variant */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: 500, 
          marginBottom: "24px",
          color: "#30393A"
        }}>
          Filled Variant
        </h2>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Medium
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="medium"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="medium"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="medium"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="medium"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="medium"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="medium"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="medium"
                error
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="medium"
                error
                fullWidth
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Small
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="small"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="small"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="small"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="small"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="small"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="small"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (Empty)</p>
              <TextField
                label="Label"
                variant="filled"
                size="small"
                error
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="filled"
                size="small"
                error
                fullWidth
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outlined Variant */}
      <section>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: 500, 
          marginBottom: "24px",
          color: "#30393A"
        }}>
          Outlined Variant
        </h2>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Medium
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="medium"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="medium"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="medium"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="medium"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="medium"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="medium"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="medium"
                error
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="medium"
                error
                fullWidth
              />
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", color: "#666" }}>
            Small
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Enabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="small"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Focused (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="small"
                fullWidth
                autoFocus
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="small"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Disabled (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="small"
                disabled
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (Empty)</p>
              <TextField
                label="Label"
                variant="outlined"
                size="small"
                error
                fullWidth
              />
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "8px" }}>Error (With Value)</p>
              <TextField
                label="Label"
                defaultValue="Value"
                variant="outlined"
                size="small"
                error
                fullWidth
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
