import pytest
import requests
  
def test_method1():
    req = requests.get("http://localhost:5000")
    assert req.status_code == 200

def test_method2():
    req = requests.get("http://localhost:3000")
    assert req.status_code == 200


