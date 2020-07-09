let history = '';
      function dis(val) {
        document.getElementById("result").value += val;
        addToHistory(val);
      }
      function solve() {
        let x = document.getElementById("result").value;
        let y = eval(x);
        document.getElementById("result").value = y;

        addToHistory('=' + y);
      }
      function clr() {
        document.getElementById("result").value = "";
        addToHistory(' \n');
      }
      function addToHistory(value) {
        history += value;
        document.getElementById('history').innerText = history;
      }