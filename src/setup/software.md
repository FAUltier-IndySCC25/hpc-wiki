# Software Setup

## OS

## NFS

## Users

## Modules (Lmod)

## Spack

Installing (like <a href="https://spack-tutorial.readthedocs.io/en/latest/tutorial_basics.html">here</a>):

```bash
git clone --depth=2 --branch=releases/v1.1 https://github.com/spack/spack.git ~/spack
source ~/spack/share/spack/setup-env.sh
spack list
```

Pre-installed compilers should be automatically recongnized by spack. You can check yourself with `spack list` or `spack compiler list`, they will appear with an `[e]` for external. If not, you can add them with:
```bash 
spack compiler find
```
or, more verbosely:
```bash 
spack compiler find /path/to/compiler/bin/
```

### Installing

Parameters: 
- `program@version`
- `^dependency`: dependency (direct or transitive), applied to the root package
- `%dependency`: direct dependency (like compiler), applied to the root or any by `^` specified intervening dependency
- `+variant` or `-variant`/`~variant`: enables or disables a variant of program, f.ex. `+cuda` or `~mpi`
- `%virtual=provider`: pending description, but f.ex. `%c,cxx=gcc %fortran=oneapi` for using different compilers fro c,c++ and fortran

### Environments

TODO

### Spack find arguments

TODO

## Anaconda

## Intel OneAPI

## Compilers

### GCC

### LLVM

## InfiniBand

### Driver

### Optional: Configuring Switch

### OpenSM

### IPoIB

## Nvidia Driver

## MPI

### OpenMPI

### IntelMPI

### HPC-X

## Slurm
