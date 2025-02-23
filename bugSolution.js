```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Update count only once on mount
    console.log("Component mounted");
  }, []);

  return <div>Count: {count}</div>;
}
```