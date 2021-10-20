import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'M6[n0@u0t[O$Q1(',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  exports: [JwtModule],
})
export class SharedModule {}
