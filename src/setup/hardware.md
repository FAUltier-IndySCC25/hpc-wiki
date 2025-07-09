# Hardware

## What to choose

Consider power budget for competition

Chassis should be big enough for experimentation and cooling sake

fans can have big impact on power draw

number of nodes have to be carefully considered  
to fully utilize power budget, but not go over it

### CPUs

Only small contribution to power, most idle at about the same power level, GPU benchmarks don't stress CPU for the most part

Still don't want weak ones for the chance some application phases are CPU-bound

Cores > Speed typically (Pollak's rule), at least if application scales well

chips with more cache can be nice for some apps, but usually compromise on throughput, needs testing

### GPUs

more is better  
newer is better (typically, though a B100 is worse than an H100 for FP64, but better in low-precision)

most impact on power budget

have to consider nodes' base power draw, as well as power for cooling

power limits lower than stock typically give better efficiency per card and make cooling easier  
have to test different configurations

### Networking

NIC is part of board

Desktop switch, rack switches draw too much

IB, one per socket ideally, as fast as possible  
number of ports depends on desired topology, see [networking page](/setup/networking#infiniband).

### RAM

As much as possible

Only use 1 DIMM per channel, saturate all channels for performance

IMC can have trouble with more (downclocking or stability issues), also needs more power for marginal/no performance uplift

### Drives

SSDs, preferably NVMe and TLC for sustained performance

one per node is enough  
for storage benchmarks, as many as possible

for storage benchmarks, want to use them for benchmark fs  
consider booting from USB or consumer M.2 SSD for storage node

## Building

consult server manual when in doubt

for quick testing, PCIe cards don't have to be screwed in  
make sure to remove or properly attach them during transport

consider airflow during cable management, both internal and external
