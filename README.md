## Usage

```bash
sudo docker build -t proxy-control .
sudo docker run -p 3000:3000 -e TARGET_ADDRESS={address} -e CONTROLS_ADDRESS={address} --network=host proxy-control 
```